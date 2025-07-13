// Types simplifiés pour Google Auth + Dashboard MVP
// ∑tude.ai

// Type de base pour le profil utilisateur
export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

// Types pour les formulaires
export interface SignInFormData {
  email: string;
  password: string;
}

// Types pour les réponses API
export interface APIResponse<T = any> {
  data?: T;
  error?: string;
  success: boolean;
}

// Types pour les props des composants
export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

// Types pour les états de l'application
export interface AppState {
  currentUser: UserProfile | null;
  isLoading: boolean;
}

// Types pour les notifications
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}