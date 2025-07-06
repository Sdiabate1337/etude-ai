// Types Supabase générés automatiquement
export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          full_name: string;
          avatar_url: string | null;
          country: string;
          university: string | null;
          domain: 'computer_science' | 'economics' | 'law';
          skill_level: number;
          xp_points: number;
          current_level: number;
          current_streak: number;
          longest_streak: number;
          last_activity_date: string;
          onboarding_completed: boolean;
          preferences: Record<string, any>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          avatar_url?: string | null;
          country: string;
          university?: string | null;
          domain: 'computer_science' | 'economics' | 'law';
          skill_level?: number;
          xp_points?: number;
          current_level?: number;
          current_streak?: number;
          longest_streak?: number;
          last_activity_date?: string;
          onboarding_completed?: boolean;
          preferences?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          avatar_url?: string | null;
          country?: string;
          university?: string | null;
          domain?: 'computer_science' | 'economics' | 'law';
          skill_level?: number;
          xp_points?: number;
          current_level?: number;
          current_streak?: number;
          longest_streak?: number;
          last_activity_date?: string;
          onboarding_completed?: boolean;
          preferences?: Record<string, any>;
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
      user_domain: 'computer_science' | 'economics' | 'law';
      project_type: 'code' | 'document' | 'analysis' | 'presentation';
      project_status: 'not_started' | 'in_progress' | 'completed' | 'reviewed';
      difficulty_level: 'beginner' | 'intermediate' | 'advanced';
      mission_type: 'solo' | 'collaborative' | 'mentoring';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}