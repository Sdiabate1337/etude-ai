// Types Supabase pour MVP avec Smart Onboarding
export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          avatar_url: string | null;
          field_of_study: string | null;
          academic_level: string | null;
          onboarding_completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          email: string;
          avatar_url?: string | null;
          field_of_study?: string | null;
          academic_level?: string | null;
          onboarding_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          email?: string;
          avatar_url?: string | null;
          onboarding_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          domain: 'computer_science' | 'economics' | 'law';
          difficulty: 'beginner' | 'intermediate' | 'advanced';
          project_type: 'code' | 'document' | 'analysis' | 'presentation';
          mission_type: 'solo' | 'collaborative' | 'mentoring';
          requirements: Record<string, any>;
          success_criteria: Record<string, any>;
          estimated_hours: number;
          xp_reward: number;
          prerequisites: string[];
          tags: string[];
          is_active: boolean;
          african_context: Record<string, any>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          domain: 'computer_science' | 'economics' | 'law';
          difficulty?: 'beginner' | 'intermediate' | 'advanced';
          project_type: 'code' | 'document' | 'analysis' | 'presentation';
          mission_type?: 'solo' | 'collaborative' | 'mentoring';
          requirements?: Record<string, any>;
          success_criteria?: Record<string, any>;
          estimated_hours?: number;
          xp_reward?: number;
          prerequisites?: string[];
          tags?: string[];
          is_active?: boolean;
          african_context?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          domain?: 'computer_science' | 'economics' | 'law';
          difficulty?: 'beginner' | 'intermediate' | 'advanced';
          project_type?: 'code' | 'document' | 'analysis' | 'presentation';
          mission_type?: 'solo' | 'collaborative' | 'mentoring';
          requirements?: Record<string, any>;
          success_criteria?: Record<string, any>;
          estimated_hours?: number;
          xp_reward?: number;
          prerequisites?: string[];
          tags?: string[];
          is_active?: boolean;
          african_context?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          project_id: string;
          status: 'not_started' | 'in_progress' | 'completed' | 'reviewed';
          submission_data: Record<string, any>;
          ai_feedback: Record<string, any>;
          peer_feedback: Record<string, any>;
          score: number | null;
          attempts: number;
          time_spent_minutes: number;
          collaboration_partners: string[];
          started_at: string | null;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          project_id: string;
          status?: 'not_started' | 'in_progress' | 'completed' | 'reviewed';
          submission_data?: Record<string, any>;
          ai_feedback?: Record<string, any>;
          peer_feedback?: Record<string, any>;
          score?: number | null;
          attempts?: number;
          time_spent_minutes?: number;
          collaboration_partners?: string[];
          started_at?: string | null;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          project_id?: string;
          status?: 'not_started' | 'in_progress' | 'completed' | 'reviewed';
          submission_data?: Record<string, any>;
          ai_feedback?: Record<string, any>;
          peer_feedback?: Record<string, any>;
          score?: number | null;
          attempts?: number;
          time_spent_minutes?: number;
          collaboration_partners?: string[];
          started_at?: string | null;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      chat_sessions: {
        Row: {
          id: string;
          session_type: 'ai_mentor' | 'peer_chat' | 'group_project';
          participants: string[];
          project_id: string | null;
          session_title: string | null;
          messages: Record<string, any>;
          is_active: boolean;
          last_message_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          session_type: 'ai_mentor' | 'peer_chat' | 'group_project';
          participants: string[];
          project_id?: string | null;
          session_title?: string | null;
          messages?: Record<string, any>;
          is_active?: boolean;
          last_message_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          session_type?: 'ai_mentor' | 'peer_chat' | 'group_project';
          participants?: string[];
          project_id?: string | null;
          session_title?: string | null;
          messages?: Record<string, any>;
          is_active?: boolean;
          last_message_at?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      social_connections: {
        Row: {
          id: string;
          user_id: string;
          connected_user_id: string;
          connection_type: 'study_buddy' | 'mentor' | 'collaborator';
          project_context: string | null;
          status: 'active' | 'inactive' | 'blocked';
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          connected_user_id: string;
          connection_type: 'study_buddy' | 'mentor' | 'collaborator';
          project_context?: string | null;
          status?: 'active' | 'inactive' | 'blocked';
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          connected_user_id?: string;
          connection_type?: 'study_buddy' | 'mentor' | 'collaborator';
          project_context?: string | null;
          status?: 'active' | 'inactive' | 'blocked';
          created_at?: string;
        };
      };
      achievements: {
        Row: {
          id: string;
          name: string;
          description: string;
          icon: string;
          category: string;
          criteria: Record<string, any>;
          xp_reward: number;
          is_active: boolean;
          rarity: 'common' | 'rare' | 'epic' | 'legendary';
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          icon: string;
          category: string;
          criteria?: Record<string, any>;
          xp_reward?: number;
          is_active?: boolean;
          rarity?: 'common' | 'rare' | 'epic' | 'legendary';
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          icon?: string;
          category?: string;
          criteria?: Record<string, any>;
          xp_reward?: number;
          is_active?: boolean;
          rarity?: 'common' | 'rare' | 'epic' | 'legendary';
          created_at?: string;
        };
      };
      user_achievements: {
        Row: {
          id: string;
          user_id: string;
          achievement_id: string;
          earned_at: string;
          context: Record<string, any>;
        };
        Insert: {
          id?: string;
          user_id: string;
          achievement_id: string;
          earned_at?: string;
          context?: Record<string, any>;
        };
        Update: {
          id?: string;
          user_id?: string;
          achievement_id?: string;
          earned_at?: string;
          context?: Record<string, any>;
        };
      };
      maze_nodes: {
        Row: {
          id: string;
          domain: 'computer_science' | 'economics' | 'law';
          level: number;
          position_x: number;
          position_y: number;
          project_id: string;
          prerequisites: string[];
          unlock_condition: Record<string, any>;
          node_type: 'standard' | 'bonus' | 'challenge' | 'collaboration';
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          domain: 'computer_science' | 'economics' | 'law';
          level: number;
          position_x: number;
          position_y: number;
          project_id: string;
          prerequisites?: string[];
          unlock_condition?: Record<string, any>;
          node_type?: 'standard' | 'bonus' | 'challenge' | 'collaboration';
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          domain?: 'computer_science' | 'economics' | 'law';
          level?: number;
          position_x?: number;
          position_y?: number;
          project_id?: string;
          prerequisites?: string[];
          unlock_condition?: Record<string, any>;
          node_type?: 'standard' | 'bonus' | 'challenge' | 'collaboration';
          is_active?: boolean;
          created_at?: string;
        };
      };
      ai_interactions: {
        Row: {
          id: string;
          user_id: string;
          interaction_type: string;
          input_data: Record<string, any>;
          output_data: Record<string, any>;
          context: Record<string, any>;
          tokens_used: number;
          response_time_ms: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          interaction_type: string;
          input_data: Record<string, any>;
          output_data: Record<string, any>;
          context?: Record<string, any>;
          tokens_used?: number;
          response_time_ms?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          interaction_type?: string;
          input_data?: Record<string, any>;
          output_data?: Record<string, any>;
          context?: Record<string, any>;
          tokens_used?: number;
          response_time_ms?: number;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

// Types d'aide pour l'utilisation
export type UserProfile = Database['public']['Tables']['user_profiles']['Row'];
export type UserProfileInsert = Database['public']['Tables']['user_profiles']['Insert'];
export type UserProfileUpdate = Database['public']['Tables']['user_profiles']['Update'];

// Types pour l'onboarding
export type FieldOfStudy = 
  | 'computer_science'
  | 'economics' 
  | 'law'
  | 'medicine'
  | 'humanities'
  | 'engineering'
  | 'business'
  | 'sciences'
  | 'other';

export type AcademicLevel = 
  | 'l1' // Year 1 Bachelor
  | 'l2' // Year 2 Bachelor  
  | 'l3' // Year 3 Bachelor
  | 'm1' // Master's 1
  | 'm2' // Master's 2
  | 'engineering' // Engineering School
  | 'other';

export interface OnboardingData {
  field_of_study: FieldOfStudy;
  academic_level: AcademicLevel;
}