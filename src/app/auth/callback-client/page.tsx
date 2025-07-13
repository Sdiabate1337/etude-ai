'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function CallbackClientPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('🔍 Traitement du callback OAuth...');
        console.log('🌐 URL actuelle:', window.location.href);
        
        // Parse the URL hash to get tokens
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');
        
        console.log('🔑 Tokens trouvés:', { 
          hasAccessToken: !!accessToken, 
          hasRefreshToken: !!refreshToken 
        });
        
        if (accessToken && refreshToken) {
          // Set the session with the tokens
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });
          
          console.log('📊 Résultat setSession:', { data, error });
          
          if (error) {
            console.error('❌ Erreur lors de l\'établissement de la session:', error);
            router.push(`/login?error=${encodeURIComponent('Erreur de session OAuth')}`);
            return;
          }

          if (data.session) {
            console.log('✅ Session OAuth établie avec succès');
            console.log('👤 Utilisateur:', data.session.user.email);
            
            // Clean the URL by removing the hash
            window.history.replaceState({}, document.title, window.location.pathname);
            
            // Force redirect to onboarding for new users
            console.log('🚀 Redirection vers l\'onboarding...');
            window.location.href = '/onboarding';
          } else {
            console.error('❌ Session non établie malgré les tokens');
            router.push(`/login?error=${encodeURIComponent('Session non établie')}`);
          }
        } else {
          console.error('❌ Tokens manquants dans l\'URL');
          router.push(`/login?error=${encodeURIComponent('Tokens OAuth manquants')}`);
        }
      } catch (error) {
        console.error('💥 Erreur inattendue dans le callback:', error);
        router.push(`/login?error=${encodeURIComponent('Erreur inattendue')}`);
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Finalisation de la connexion...
        </h2>
        <p className="text-gray-500">
          Veuillez patienter pendant que nous vous connectons.
        </p>
      </div>
    </div>
  );
}
