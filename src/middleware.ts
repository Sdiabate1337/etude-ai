import { createMiddlewareClient } from '@/lib/supabase'  
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = createMiddlewareClient(request)
  
  // Routes qui nécessitent une authentification
  const protectedRoutes = ['/dashboard', '/onboarding', '/projects']
  
  // Routes d'authentification (déjà connecté → redirect)
  const authRoutes = ['/auth/signin', '/auth/signup']
  
  const currentPath = request.nextUrl.pathname
  
  try {
    // Vérifier la session utilisateur
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('Middleware auth error:', error)
    }
    
    const isAuthenticated = !!session
    const isProtectedRoute = protectedRoutes.some(route => currentPath.startsWith(route))
    const isAuthRoute = authRoutes.some(route => currentPath.startsWith(route))
    
    // Si utilisateur connecté et sur une page d'auth → redirect vers dashboard ou onboarding
    if (isAuthenticated && isAuthRoute) {
      // Vérifier si l'onboarding est complété
      const { data: profile } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('id', session.user.id)
        .single()
      
      if (profile?.onboarding_completed) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      } else {
        return NextResponse.redirect(new URL('/onboarding', request.url))
      }
    }
    
    // Si utilisateur non connecté et sur une route protégée → redirect vers signin
    if (!isAuthenticated && isProtectedRoute) {
      const redirectUrl = new URL('/auth/signin', request.url)
      redirectUrl.searchParams.set('redirectTo', currentPath)
      return NextResponse.redirect(redirectUrl)
    }
    
    // Si utilisateur connecté et sur /onboarding mais onboarding déjà complété → redirect dashboard
    if (isAuthenticated && currentPath === '/onboarding') {
      const { data: profile } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('id', session.user.id)
        .single()
      
      if (profile?.onboarding_completed) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    }
    
    // Si utilisateur connecté et sur /dashboard mais onboarding pas complété → redirect onboarding
    if (isAuthenticated && currentPath.startsWith('/dashboard')) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('id', session.user.id)
        .single()
      
      if (!profile?.onboarding_completed) {
        return NextResponse.redirect(new URL('/onboarding', request.url))
      }
    }
    
    return supabaseResponse
    
  } catch (error) {
    console.error('Middleware error:', error)
    // En cas d'erreur, permettre la navigation mais log l'erreur
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
