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
      primary: '#1e40af',     
      secondary: '#3b82f6',   
      background: '#f0f9ff',  
      text: '#1e293b',        
      subtext: '#64748b',     
      accent: '#0ea5e9',      
      border: '#bfdbfe',      
      shadow: 'rgba(59, 130, 246, 0.3)',
    },
  },
  moderate: {
    name: 'moderate',
    colors: {
      primary: '#b45309',     
      secondary: '#f59e0b',   
      background: '#fffbeb',  
      text: '#1e293b',        
      subtext: '#64748b',     
      accent: '#fbbf24',      
      border: '#fef3c7',      
      shadow: 'rgba(245, 158, 11, 0.3)',
    },
  },
  aggressive: {
    name: 'aggressive',
    colors: {
      primary: '#b91c1c',     
      secondary: '#ef4444',   
      background: '#fef2f2',  
      text: '#1e293b',        
      subtext: '#64748b',     
      accent: '#f87171',      
      border: '#fee2e2',      
      shadow: 'rgba(239, 68, 68, 0.3)',
    },
  },
} 