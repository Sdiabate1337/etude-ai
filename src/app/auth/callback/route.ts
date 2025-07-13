import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const error_description = searchParams.get('error_description');

  // Handle OAuth errors
  if (error) {
    console.error('OAuth error:', error, error_description);
    return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(error_description || error)}`);
  }

  // Handle code-based flow (PKCE)
  if (code) {
    try {
      // Exchange code for session
      const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
      
      if (exchangeError) {
        console.error('Error exchanging code for session:', exchangeError);
        return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent('Erreur d\'échange de session')}`);
      }

      if (data.session) {
        // Set secure cookies
        const response = NextResponse.redirect(`${origin}/dashboard`);
        
        response.cookies.set('sb-access-token', data.session.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 30, // 30 days
        });

        response.cookies.set('sb-refresh-token', data.session.refresh_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 30, // 30 days
        });

        return response;
      }
    } catch (error) {
      console.error('Unexpected error in callback:', error);
      return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent('Erreur inattendue')}`);
    }
  }

  // Handle implicit flow (tokens in URL fragment)
  // Since we can't access URL fragments server-side, redirect to a client-side handler
  return NextResponse.redirect(`${origin}/auth/callback-client`);
}
