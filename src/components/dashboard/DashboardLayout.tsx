'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  DocumentTextIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  CogIcon
} from '@heroicons/react/24/outline'

interface Profile {
  id: string
  email: string
  display_name: string | null
  level: string
  learning_domains: string[]
  onboarding_completed: boolean
}

interface DashboardLayoutProps {
  children: React.ReactNode
  profile: Profile
}

export default function DashboardLayout({ children, profile }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Mes Projets', href: '/projects', icon: DocumentTextIcon, current: false },
    { name: 'Profil', href: '/profile', icon: UserCircleIcon, current: false },
    { name: 'Paramètres', href: '/settings', icon: CogIcon, current: false },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar Mobile */}
      <div className={`lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-slate-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center px-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                ∑tude.ai
              </span>
            </div>
            <nav className="mt-8 flex-1 space-y-1 px-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    item.current
                      ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="mr-4 h-6 w-6 flex-shrink-0" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Sidebar Desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-1 flex-col min-h-0 bg-white border-r border-slate-200">
          <div className="flex flex-1 flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                ∑tude.ai
              </span>
              <span className="ml-2 text-sm text-slate-500">
                Théorie → Pratique
              </span>
            </div>
            <nav className="mt-8 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.current
                      ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-slate-200">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              className="lg:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-slate-500 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setSidebarOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>

            {/* User menu */}
            <div className="relative ml-auto">
              <button
                type="button"
                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {(profile.display_name || profile.email)?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="ml-2 text-sm font-medium text-slate-700 hidden sm:block">
                  {profile.display_name || profile.email?.split('@')[0]}
                </span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs text-slate-500">
                      {profile.email}
                    </div>
                    <a
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      <UserCircleIcon className="mr-2 h-4 w-4" />
                      Mon Profil
                    </a>
                    <a
                      href="/settings"
                      className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      <CogIcon className="mr-2 h-4 w-4" />
                      Paramètres
                    </a>
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      <ArrowRightOnRectangleIcon className="mr-2 h-4 w-4" />
                      Se déconnecter
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contenu */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
