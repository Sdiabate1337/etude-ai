import { ChatSession, Project, UserProfile } from '@/lib/supabase';

// Importer les types depuis supabase
export type {
  UserProfile,
  Project,
  UserProgress,
  ChatSession,
  SocialConnection,
  Achievement,
  UserAchievement,
  MazeNode,
  AIInteraction,
} from '@/lib/supabase';

// Types supplémentaires pour l'interface
export interface ChatMessage {
  id: string;
  sender_id: string;
  sender_name: string;
  content: string;
  message_type: 'text' | 'code' | 'file' | 'system';
  timestamp: string;
  metadata?: Record<string, any>;
}

// Types pour les réponses API
export interface APIResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// Types pour l'IA
export interface AIResponse {
  content: string;
  suggestions?: string[];
  actions?: string[];
  confidence: number;
  context?: Record<string, any>;
}

export interface MCPToolResult {
  content: Array<{
    type: 'text' | 'image' | 'resource';
    text?: string;
    data?: string;
    uri?: string;
  }>;
  isError?: boolean;
}

// Types pour les props des composants
export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

// Types pour les formulaires
export interface SignUpFormData {
  email: string;
  password: string;
  full_name: string;
  country: string;
  university?: string;
  domain: 'computer_science' | 'economics' | 'law';
}

export interface SignInFormData {
  email: string;
  password: string;
}

// Types pour les états de l'application
export interface AppState {
  currentUser: UserProfile | null;
  currentProject: Project | null;
  activeChatSession: ChatSession | null;
  notifications: Notification[];
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}