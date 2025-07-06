import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Client pour les interactions côté client
export const createClientComponentClient = () => {
  return createClient<Database>(supabaseUrl, supabaseAnonKey);
};

// Client pour les Server Components
export const createServerComponentClient = () => {
  return createClient<Database>(supabaseUrl, supabaseAnonKey);
};

// Types helpers
export type UserProfile = Database['public']['Tables']['user_profiles']['Row'];
export type Project = Database['public']['Tables']['projects']['Row'];
export type UserProgress = Database['public']['Tables']['user_progress']['Row'];
export type ChatSession = Database['public']['Tables']['chat_sessions']['Row'];
export type SocialConnection = Database['public']['Tables']['social_connections']['Row'];
export type Achievement = Database['public']['Tables']['achievements']['Row'];
export type UserAchievement = Database['public']['Tables']['user_achievements']['Row'];
export type MazeNode = Database['public']['Tables']['maze_nodes']['Row'];
export type AIInteraction = Database['public']['Tables']['ai_interactions']['Row'];