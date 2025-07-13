import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Routes qui nécessitent une authentification
  const protectedRoutes = ['/dashboard', '/onboarding'];
  
  // Routes publiques (pas besoin d'auth)
  const publicRoutes = ['/', '/login', '/auth/callback'];
  
  // Vérifier si la route est protégée
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isPublicRoute = publicRoutes.includes(pathname) || pathname.startsWith('/auth/');
  
  // Si c'est une route protégée, vérifier l'authentification
  if (isProtectedRoute) {
    const accessToken = request.cookies.get('sb-access-token')?.value;
    
  
  }
  
  // Si l'utilisateur est connecté et va sur login, rediriger vers dashboard
  if (pathname === '/login') {
    const accessToken = request.cookies.get('sb-access-token')?.value;
    
    if (accessToken) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
