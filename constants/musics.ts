export const DRIVING_MODES = {
  CALM: 0,
  MODERATE: 1,
  HIGH: 2,
  VERY_HIGH: 3,
} as const;

export const DRIVING_MODE_NAMES = {
  [DRIVING_MODES.CALM]: 'Desanimado',
  [DRIVING_MODES.MODERATE]: 'Feliz',
  [DRIVING_MODES.HIGH]: 'Nervoso',
  [DRIVING_MODES.VERY_HIGH]: 'Nervoso',
} as const;

export const DRIVING_MODE_MUSIC = {
  [DRIVING_MODES.CALM]: require('../assets/calma.mp3'),
  [DRIVING_MODES.MODERATE]: require('../assets/moderada.mp3'),
  [DRIVING_MODES.HIGH]: require('../assets/agressiva.mp3'),
  [DRIVING_MODES.VERY_HIGH]: require('../assets/agressiva.mp3'),
} as const;