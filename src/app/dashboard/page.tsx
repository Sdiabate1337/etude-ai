import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import DashboardLayout from '@/components/dashboard/DashboardLayout'

export default async function DashboardPage() {
  const supabase = createClient()
  
  // Vérifier l'authentification
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    redirect('/auth/signin')
  }
  
  // Récupérer le profil utilisateur
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()
  
  if (!profile?.onboarding_completed) {
    redirect('/onboarding')
  }
  
  return (
    <DashboardLayout profile={profile}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Header */}
        <div className="border-b border-slate-200 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
              <h1 className="text-3xl font-bold text-slate-900">
                Salut {profile.display_name || profile.email?.split('@')[0]} ! 👋
              </h1>
              <p className="mt-2 text-slate-600">
                Prêt à transformer tes connaissances en projets concrets ?
              </p>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Section Bienvenue */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-8 border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  🎯 Ton Parcours Personnalisé
                </h2>
                <p className="text-slate-600 mb-4">
                  Basé sur tes préférences : <span className="font-medium">{profile.learning_domains?.join(', ')}</span>
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  🚀 Générer mon Premier Projet
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Stats & Progress */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-blue-50">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Projets Créés</p>
                  <p className="text-2xl font-bold text-slate-900">0</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-green-50">
                  <span className="text-2xl">✅</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Projets Complétés</p>
                  <p className="text-2xl font-bold text-slate-900">0</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-purple-50">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Niveau Actuel</p>
                  <p className="text-2xl font-bold text-slate-900 capitalize">{profile.level}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Projets (vide pour l'instant) */}
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Tes Projets</h3>
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-4xl text-slate-400">📋</span>
              </div>
              <h4 className="text-lg font-medium text-slate-900 mb-2">Aucun projet pour l'instant</h4>
              <p className="text-slate-600 mb-6">
                Commence ton aventure en générant ton premier projet personnalisé !
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200">
                🎨 Créer mon Premier Projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export const metadata = {
  title: 'Dashboard - ∑tude.ai',
  description: 'Ton espace personnel pour transformer la théorie en pratique'
}
