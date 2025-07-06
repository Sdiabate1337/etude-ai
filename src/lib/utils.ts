import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatTime(date: string | Date) {
  return new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
}

export function calculateXPForLevel(level: number): number {
  return Math.floor(100 * Math.pow(1.5, level - 1));
}

export function getLevelFromXP(xp: number): number {
  let level = 1;
  let totalXP = 0;
  
  while (totalXP <= xp) {
    totalXP += calculateXPForLevel(level);
    level++;
  }
  
  return level - 1;
}

export function getProgressToNextLevel(xp: number): {
  currentLevel: number;
  nextLevel: number;
  currentLevelXP: number;
  nextLevelXP: number;
  progress: number;
} {
  const currentLevel = getLevelFromXP(xp);
  const nextLevel = currentLevel + 1;
  
  let currentLevelXP = 0;
  for (let i = 1; i < currentLevel; i++) {
    currentLevelXP += calculateXPForLevel(i);
  }
  
  const nextLevelXP = currentLevelXP + calculateXPForLevel(currentLevel);
  const progress = ((xp - currentLevelXP) / calculateXPForLevel(currentLevel)) * 100;
  
  return {
    currentLevel,
    nextLevel,
    currentLevelXP,
    nextLevelXP,
    progress: Math.min(progress, 100),
  };
}

export function getCountryFlag(country: string): string {
  const flags: Record<string, string> = {
    'Algeria': '🇩🇿',
    'Angola': '🇦🇴',
    'Benin': '🇧🇯',
    'Botswana': '🇧🇼',
    'Burkina Faso': '🇧🇫',
    'Burundi': '🇧🇮',
    'Cameroon': '🇨🇲',
    'Cape Verde': '🇨🇻',
    'Central African Republic': '🇨🇫',
    'Chad': '🇹🇩',
    'Comoros': '🇰🇲',
    'Congo': '🇨🇬',
    'Democratic Republic of Congo': '🇨🇩',
    'Djibouti': '🇩🇯',
    'Egypt': '🇪🇬',
    'Equatorial Guinea': '🇬🇶',
    'Eritrea': '🇪🇷',
    'Eswatini': '🇸🇿',
    'Ethiopia': '🇪🇹',
    'Gabon': '🇬🇦',
    'Gambia': '🇬🇲',
    'Ghana': '🇬🇭',
    'Guinea': '🇬🇳',
    'Guinea-Bissau': '🇬🇼',
    'Ivory Coast': '🇨🇮',
    'Kenya': '🇰🇪',
    'Lesotho': '🇱🇸',
    'Liberia': '🇱🇷',
    'Libya': '🇱🇾',
    'Madagascar': '🇲🇬',
    'Malawi': '🇲🇼',
    'Mali': '🇲🇱',
    'Mauritania': '🇲🇷',
    'Mauritius': '🇲🇺',
    'Morocco': '🇲🇦',
    'Mozambique': '🇲🇿',
    'Namibia': '🇳🇦',
    'Niger': '🇳🇪',
    'Nigeria': '🇳🇬',
    'Rwanda': '🇷🇼',
    'Sao Tome and Principe': '🇸🇹',
    'Senegal': '🇸🇳',
    'Seychelles': '🇸🇨',
    'Sierra Leone': '🇸🇱',
    'Somalia': '🇸🇴',
    'South Africa': '🇿🇦',
    'South Sudan': '🇸🇸',
    'Sudan': '🇸🇩',
    'Tanzania': '🇹🇿',
    'Togo': '🇹🇬',
    'Tunisia': '🇹🇳',
    'Uganda': '🇺🇬',
    'Zambia': '🇿🇲',
    'Zimbabwe': '🇿🇼',
  };
  
  return flags[country] || '🌍';
}

export function getDomainColor(domain: string): string {
  const colors: Record<string, string> = {
    'computer_science': 'bg-blue-500',
    'economics': 'bg-green-500',
    'law': 'bg-purple-500',
  };
  
  return colors[domain] || 'bg-gray-500';
}

export function getDomainIcon(domain: string): string {
  const icons: Record<string, string> = {
    'computer_science': '💻',
    'economics': '📊',
    'law': '⚖️',
  };
  
  return icons[domain] || '📚';
}