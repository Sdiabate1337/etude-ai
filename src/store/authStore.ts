'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@supabase/supabase-js';
// Inline UserProfile type (temporary until database schemas are generated)
type UserProfile = {
  id: string;
  email: string;
  display_name: string | null;
  level: string | null;
  learning_domains: string[] | null;
  learning_goals: string[] | null;
  preferred_format: string | null;
  time_available: string | null;
  learning_style: string | null;
  motivation: string | null;
  challenges: string[] | null;
  expectations: string | null;
  onboarding_completed: boolean;
  created_at: string;
  updated_at: string;
};

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setProfile: (profile: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      profile: null,
      loading: true,
      setUser: (user) => set({ user }),
      setProfile: (profile) => set({ profile }),
      setLoading: (loading) => set({ loading }),
      reset: () => set({ user: null, profile: null, loading: false }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        profile: state.profile,
      }),
    }
  )
);