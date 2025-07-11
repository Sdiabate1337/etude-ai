import { create } from 'zustand'
import { User } from '@supabase/auth-helpers-nextjs'

// Profile type definition for auth store
type Profile = {
  id: string
  email: string
  display_name: string | null
  level: string | null
  learning_domains: string[] | null
  learning_goals: string[] | null
  preferred_format: string | null
  time_available: string | null
  learning_style: string | null
  motivation: string | null
  challenges: string[] | null
  expectations: string | null
  onboarding_completed: boolean
  created_at: string
  updated_at: string
}

interface AuthState {
  user: User | null
  profile: Profile | null
  loading: boolean
  isAuthenticated: boolean
  onboardingCompleted: boolean
  
  // Actions
  setUser: (user: User | null) => void
  setProfile: (profile: Profile | null) => void
  setLoading: (loading: boolean) => void
  setOnboardingCompleted: (completed: boolean) => void
  reset: () => void
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  loading: true,
  isAuthenticated: false,
  onboardingCompleted: false,
  
  setUser: (user) => set((state) => ({ 
    ...state, 
    user, 
    isAuthenticated: !!user 
  })),
  
  setProfile: (profile) => set((state) => ({ 
    ...state, 
    profile,
    onboardingCompleted: profile?.onboarding_completed ?? false
  })),
  
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  
  setOnboardingCompleted: (completed) => set((state) => ({ 
    ...state, 
    onboardingCompleted: completed 
  })),
  
  reset: () => set({
    user: null,
    profile: null,
    loading: false,
    isAuthenticated: false,
    onboardingCompleted: false
  })
}))

// Sélecteurs pour une meilleure performance
export const selectUser = (state: AuthState) => state.user
export const selectProfile = (state: AuthState) => state.profile
export const selectIsAuthenticated = (state: AuthState) => state.isAuthenticated
export const selectOnboardingCompleted = (state: AuthState) => state.onboardingCompleted
