'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import type { User, Session } from '@supabase/supabase-js'

interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  university: string | null
  country: string | null
  whatsapp_number: string | null
  field_of_study: string | null
  academic_level: string | null
  level: string | null
  learning_domains: string[] | null
  onboarding_completed: boolean
  created_at: string
  updated_at: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState<Session | null>(null)
  
  const supabase = createClient()

  useEffect(() => {
    // Récupérer la session initiale
    const getInitialSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) {
        console.error('Error getting session:', error)
      }
      
      setSession(session)
      setUser(session?.user ?? null)
      
      if (session?.user) {
        await fetchProfile(session.user.id)
      }
      
      setLoading(false)
    }

    getInitialSession()

    // Écouter les changements d'authentification
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        
        if (session?.user) {
          await fetchProfile(session.user.id)
        } else {
          setProfile(null)
        }
        
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const fetchProfile = async (userId: string) => {
    // Skip profile fetch if using demo Supabase values
    if (process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://demo.supabase.co' || 
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === 'demo-key') {
      console.log('🔧 Demo mode: Skipping profile fetch. Configure real Supabase to enable profiles.')
      setProfile(null)
      return
    }

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // No profile found - create one for new user
          await createProfile(userId)
        } else {
          console.error('Error fetching profile:', error)
        }
      } else {
        setProfile(data)
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  const createProfile = async (userId: string) => {
    console.log('Creating profile for user:', userId)
    
    try {
      const { data: userData } = await supabase.auth.getUser()
      const user = userData.user
      
      if (!user) {
        console.error('No user found when creating profile')
        return
      }
      
      const profileData = {
        id: userId,
        email: user.email || '',
        full_name: user.user_metadata?.full_name || user.user_metadata?.name || null,
        avatar_url: user.user_metadata?.avatar_url || null,
        university: null,
        country: null,
        whatsapp_number: null,
        field_of_study: null,
        academic_level: null,
        level: null,
        learning_domains: null,
        onboarding_completed: false
      }
      
      console.log('Inserting profile data:', profileData)
      
      const { data, error } = await supabase
        .from('user_profiles')
        .insert(profileData)
        .select()
        .single()
      
      if (error) {
        console.error('Error creating profile:', error)
        console.error('Error details:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        })
        throw error
      } else {
        console.log('Profile created successfully:', data)
        setProfile(data)
        return data
      }
    } catch (error) {
      console.error('Error creating profile:', error)
      throw error
    }
  }

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: 'No user logged in' }

    console.log('Updating profile for user:', user.id)
    console.log('Update data:', updates)

    try {
      // First check if profile exists
      const { data: existingProfile, error: fetchError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (fetchError && fetchError.code === 'PGRST116') {
        // Profile doesn't exist, create it first
        console.log('Profile not found, creating new profile...')
        try {
          await createProfile(user.id)
          console.log('Profile created, proceeding with update...')
        } catch (createError) {
          console.error('Failed to create profile:', createError)
          return { error: 'Failed to create user profile' }
        }
      } else if (fetchError) {
        console.error('Error checking profile existence:', fetchError)
        return { error: 'Failed to check profile existence' }
      }

      // Now update the profile
      const { data, error } = await supabase
        .from('user_profiles')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', user.id)
        .select()
        .single()

      if (error) {
        console.error('Error updating profile:', error)
        console.error('Error details:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        })
        return { error: error.message }
      }

      console.log('Profile updated successfully:', data)
      setProfile(data)
      return { data }
    } catch (error) {
      console.error('Error updating profile:', error)
      return { error: 'Failed to update profile' }
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
      return { error: error.message }
    }
    return { error: null }
  }

  const signInWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      return { error: error.message }
    }
    
    return { data, error: null }
  }

  const signUpWithEmail = async (email: string, password: string, displayName?: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        }
      }
    })
    
    if (error) {
      return { error: error.message }
    }
    
    return { data, error: null }
  }

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    
    if (error) {
      return { error: error.message }
    }
    
    return { data, error: null }
  }

  return {
    user,
    profile,
    session,
    loading,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signOut,
    updateProfile,
    fetchProfile
  }
}