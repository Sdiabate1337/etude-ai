'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, profile, loading, signOut } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    } else if (!loading && user && profile && !profile.onboarding_completed) {
      router.push('/onboarding');
    }
  }, [user, profile, loading, router]);

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        console.error('Error signing out:', error);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-md opacity-30 animate-pulse"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center animate-spin">
              <span className="text-white font-black text-2xl">∑</span>
            </div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">Chargement de votre espace...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Premium Responsive Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative group">
                <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center text-white font-black text-base sm:text-lg group-hover:scale-105 transition-transform duration-300">
                  ∑
                </div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-black text-gray-900">∑tude.ai</h1>
                <p className="text-xs text-gray-500 font-medium hidden sm:block">Théorie → Pratique</p>
              </div>
            </div>
            
            {/* User Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                {profile?.avatar_url && (
                  <div className="relative group">
                    <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img
                      src={profile.avatar_url}
                      alt="Avatar"
                      className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="hidden lg:block">
                  <p className="text-sm font-semibold text-gray-900">{profile?.full_name || 'Utilisateur'}</p>
                  <p className="text-xs text-gray-500">{profile?.email || user.email}</p>
                </div>
              </div>
              
              <Button
                onClick={handleSignOut}
                variant="outline"
                size="sm"
                className="border-gray-300 hover:border-red-300 hover:text-red-600 transition-colors text-xs sm:text-sm px-2 sm:px-3"
              >
                <span className="hidden sm:inline">Déconnexion</span>
                <span className="sm:hidden">Exit</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Welcome Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 rounded-3xl shadow-2xl p-8 mb-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>
          
          <div className="relative text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group hover:scale-105 transition-transform duration-300">
              <span className="text-3xl font-black group-hover:scale-110 transition-transform duration-300">∑</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
              Bienvenue, <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">{profile?.full_name?.split(' ')[0] || 'Utilisateur'}</span> ! 🚀
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Votre espace d'apprentissage personnalisé est prêt à transformer vos connaissances en compétences pratiques
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                <span className="text-sm font-bold tracking-wide group-hover:scale-105 transition-transform duration-300">
                  THÉORIE → PRATIQUE
                </span>
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-gray-900 font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-lg">
                ✨ BÊTA EXCLUSIVE
              </div>
            </div>
          </div>
        </div>

        {/* Premium Responsive Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Projets Card */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="relative">
                  <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform duration-300">0</div>
                  <div className="text-xs text-blue-500 font-medium">+0 ce mois</div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Projets Actifs</h3>
              <p className="text-xs sm:text-sm text-gray-600">Vos projets d'apprentissage en cours</p>
            </div>
          </div>

          {/* Complétés Card */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 w-14 h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-green-600 group-hover:scale-110 transition-transform duration-300">0</div>
                  <div className="text-xs text-green-500 font-medium">+0 ce mois</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Projets Terminés</h3>
              <p className="text-sm text-gray-600">Vos réussites et accomplissements</p>
            </div>
          </div>

          {/* XP Points Card */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 w-14 h-14 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-orange-600 group-hover:scale-110 transition-transform duration-300">0</div>
                  <div className="text-xs text-orange-500 font-medium">+0 ce mois</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Points XP</h3>
              <p className="text-sm text-gray-600">Votre progression d'apprentissage</p>
            </div>
          </div>
        </div>

        {/* Premium Responsive Quick Actions */}
        <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30" />
          <div className="relative">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 sm:mb-3 px-4">Commencez Votre Parcours</h3>
              <p className="text-gray-600 text-base sm:text-lg px-4">Transformez vos idées en projets concrets</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Nouveau Projet */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm font-medium">CRÉER</div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300">Nouveau Projet</h4>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">Lancez un projet personnalisé adapté à vos objectifs d'apprentissage</p>
                  <div className="flex items-center text-white/80 text-xs sm:text-sm font-medium group-hover:text-white transition-colors">
                    <span>Commencer maintenant</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Explorer */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="text-white/60 text-sm font-medium">DÉCOUVRIR</div>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-300">Explorer</h4>
                  <p className="text-green-100 text-sm leading-relaxed mb-4">Découvrez les domaines d'expertise et trouvez votre voie</p>
                  <div className="flex items-center text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    <span>Parcourir les domaines</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Responsive Profile Section */}
        <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-green-50/30" />
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 sm:mb-2">Votre Profil</h3>
                <p className="text-gray-600 text-sm sm:text-base">Gérez vos informations personnelles</p>
              </div>
              <div className="relative group flex justify-center sm:justify-end">
                {profile?.avatar_url && (
                  <div className="relative">
                    <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img
                      src={profile.avatar_url}
                      alt="Avatar"
                      className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">Nom Complet</label>
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 group-hover:bg-blue-50 transition-colors">
                    <p className="text-base sm:text-lg font-semibold text-gray-900">{profile?.full_name || 'Non défini'}</p>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 group-hover:text-green-600 transition-colors">Adresse Email</label>
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 group-hover:bg-green-50 transition-colors">
                    <p className="text-base sm:text-lg font-semibold text-gray-900 break-all sm:break-normal">{profile?.email || user.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 group-hover:text-orange-600 transition-colors">Membre Depuis</label>
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 group-hover:bg-orange-50 transition-colors">
                    <p className="text-base sm:text-lg font-semibold text-gray-900">
                      {profile?.created_at ? new Date(profile.created_at).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'Aujourd\'hui'}
                    </p>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 group-hover:text-purple-600 transition-colors">Statut</label>
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 group-hover:bg-purple-50 transition-colors">
                    <div className="flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                      <p className="text-base sm:text-lg font-semibold text-gray-900">Membre Bêta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
