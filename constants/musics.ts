export const musics = [
  { id: 1, title: 'Suave', uri: require('../assets/calma.mp3') },
  { id: 2, title: 'Moderado', uri: require('../assets/moderada.mp3') },
  { id: 3, title: 'Rápido', uri: require('../assets/agressiva.mp3') },
]

const agressiva = {
  url: require('../assets/agressiva.mp3'),
  title: 'Psychosocial',
  artist: 'Slipknot',
  artwork: '',
  duration: 56
}

export const DRIVING_MODES = {
  CALM: 0,
  MODERATE: 1,
  HIGH: 2,
  VERY_HIGH: 3,
} as const;

export const DRIVING_MODE_NAMES = {
  [DRIVING_MODES.CALM]: 'calmo',
  [DRIVING_MODES.MODERATE]: 'moderado',
  [DRIVING_MODES.HIGH]: 'alto',
  [DRIVING_MODES.VERY_HIGH]: 'muito alto',
} as const;

export const DRIVING_MODE_MUSIC = {
  [DRIVING_MODES.CALM]: require('../assets/calma.mp3'),
  [DRIVING_MODES.MODERATE]: require('../assets/moderada.mp3'),
  [DRIVING_MODES.HIGH]: require('../assets/agressiva.mp3'),
  [DRIVING_MODES.VERY_HIGH]: require('../assets/agressiva.mp3'),
} as const;