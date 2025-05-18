export const DRIVING_MODES = {
  CALM: 0,
  MODERATE: 1,
  HIGH: 2,
  VERY_HIGH: 3,
} as const;

export const DRIVING_MODE_NAMES = {
  [DRIVING_MODES.CALM]: 'Calmo',
  [DRIVING_MODES.MODERATE]: 'Moderado',
  [DRIVING_MODES.HIGH]: 'Alto',
  [DRIVING_MODES.VERY_HIGH]: 'Muito Alto',
} as const;

export const DRIVING_MODE_MUSIC = {
  [DRIVING_MODES.CALM]: require('../assets/calma.mp3'),
  [DRIVING_MODES.MODERATE]: require('../assets/moderada.mp3'),
  [DRIVING_MODES.HIGH]: require('../assets/agressiva.mp3'),
  [DRIVING_MODES.VERY_HIGH]: require('../assets/agressiva.mp3'),
} as const;

export const TRACK_INFO = {
  [DRIVING_MODES.CALM]: {
    title: 'Rises the moon',
    artist: 'Liana Flores',
  },
  [DRIVING_MODES.MODERATE]: {
    title: 'That\'s what I like',
    artist: 'Bruno Mars',
  },
  [DRIVING_MODES.HIGH]: {
    title: 'Psychosocial',
    artist: 'Slipknot',
  },
  [DRIVING_MODES.VERY_HIGH]: {
    title: 'Psychosocial',
    artist: 'Slipknot',
  },
} as const;