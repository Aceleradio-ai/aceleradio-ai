export type ThemeType = 'calm' | 'moderate' | 'aggressive'

export interface Theme {
  name: ThemeType
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    subtext: string
    accent: string
    border: string
    shadow: string
  }
}

export const themes: Record<ThemeType, Theme> = {
  calm: {
    name: 'calm',
    colors: {
      primary: '#1e40af',     // Deep blue
      secondary: '#3b82f6',   // Bright blue
      background: '#f0f9ff',  // Light blue background
      text: '#1e293b',        // Dark slate
      subtext: '#64748b',     // Slate gray
      accent: '#0ea5e9',      // Sky blue
      border: '#bfdbfe',      // Light blue border
      shadow: 'rgba(59, 130, 246, 0.3)',
    },
  },
  moderate: {
    name: 'moderate',
    colors: {
      primary: '#15803d',     // Forest green
      secondary: '#22c55e',   // Emerald green
      background: '#f0fdf4',  // Light green background
      text: '#1e293b',        // Dark slate
      subtext: '#64748b',     // Slate gray
      accent: '#4ade80',      // Light green
      border: '#bbf7d0',      // Mint green border
      shadow: 'rgba(34, 197, 94, 0.3)',
    },
  },
  aggressive: {
    name: 'aggressive',
    colors: {
      primary: '#b91c1c',     // Deep red
      secondary: '#ef4444',   // Bright red
      background: '#fef2f2',  // Light red background
      text: '#1e293b',        // Dark slate
      subtext: '#64748b',     // Slate gray
      accent: '#f87171',      // Light red
      border: '#fee2e2',      // Pink border
      shadow: 'rgba(239, 68, 68, 0.3)',
    },
  },
} 