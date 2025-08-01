import React, { useEffect, useState, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { Text } from 'tamagui'
import { WebSocketService } from '../services/WebSocketService'
import { useTheme } from '../contexts/ThemeContext'
import { DRIVING_MODES, DRIVING_MODE_NAMES, DRIVING_MODE_MUSIC, TRACK_INFO } from '../constants/musics'

type DrivingMode = typeof DRIVING_MODES[keyof typeof DRIVING_MODES]

export function MusicPlayer() {
  const { currentTheme, setDrivingBehavior } = useTheme()
  const [sound, setSound] = useState<Audio.Sound | null>(null)
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(1)
  const [currentMode, setCurrentMode] = useState<DrivingMode>(DRIVING_MODES.CALM)
  const [wsService] = useState(() => new WebSocketService('ws://ec2-54-85-216-228.compute-1.amazonaws.com:1025'))
  const isChangingTrack = useRef(false)
  const lastModeRef = useRef<DrivingMode>(DRIVING_MODES.CALM)
  const soundRef = useRef<Audio.Sound | null>(null)

  useEffect(() => {
    setupAudio()
    wsService.connect()

    return () => {
      cleanup()
      wsService.disconnect()
    }
  }, [])

  const setupAudio = async () => {
    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      })

      await loadTrack(currentMode)
    } catch (error) {
      console.error('Error setting up audio:', error)
    }
  }

  const stopAndUnloadSound = async (currentSound: Audio.Sound | null) => {
    if (currentSound) {
      try {
        const status = await currentSound.getStatusAsync()
        if (status.isLoaded) {
          await currentSound.stopAsync()
          await currentSound.unloadAsync()
        }
      } catch (error) {
        console.error('Error stopping sound:', error)
      }
    }
  }

  const getThemeForMode = (mode: DrivingMode) => {
    switch (mode) {
      case DRIVING_MODES.CALM:
        return 'calm'
      case DRIVING_MODES.MODERATE:
        return 'moderate'
      case DRIVING_MODES.HIGH:
      case DRIVING_MODES.VERY_HIGH:
        return 'aggressive'
      default:
        return 'calm'
    }
  }

  const loadTrack = async (mode: DrivingMode) => {
    if (isChangingTrack.current) {
      console.log('Already changing track, skipping...')
      return
    }

    try {
      isChangingTrack.current = true
      console.log('Starting track change to mode:', mode)

      if (soundRef.current) {
        console.log('Stopping current sound...')
        await stopAndUnloadSound(soundRef.current)
        soundRef.current = null
        setSound(null)
      }

      const newTheme = getThemeForMode(mode)
      setDrivingBehavior(newTheme)

      const track = DRIVING_MODE_MUSIC[mode]
      if (!track) {
        console.error('No track found for mode:', mode)
        return
      }

      console.log('Creating new sound for mode:', mode)
      const { sound: newSound } = await Audio.Sound.createAsync(
        track,
        { 
          shouldPlay: true,
          isLooping: true,
          volume: 1.0,
          progressUpdateIntervalMillis: 100,
        },
        onPlaybackStatusUpdate
      )

      const status = await newSound.getStatusAsync()
      if (status.isLoaded) {
        console.log('Sound loaded successfully')
        soundRef.current = newSound
        setSound(newSound)
        setDuration(status.durationMillis || 1)
        lastModeRef.current = mode
      }
    } catch (error) {
      console.error('Error loading track:', error)
    } finally {
      isChangingTrack.current = false
    }
  }

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis || 0)
    }
  }

  const cleanup = async () => {
    if (soundRef.current) {
      await stopAndUnloadSound(soundRef.current)
      soundRef.current = null
    }
    setSound(null)
  }

  const handleCarData = async (data: number) => {
    console.log('Handling car data:', data)
    const mode = data as DrivingMode
    
    if (mode !== lastModeRef.current) {
      console.log('Mode changed from', lastModeRef.current, 'to', mode)
      setCurrentMode(mode)
      await loadTrack(mode)
    } else {
      console.log('Mode unchanged:', mode)
    }
  }

  useEffect(() => {
    wsService.on('carData', handleCarData)
  }, [wsService])

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const currentTrackInfo = TRACK_INFO[currentMode]

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.colors.background }]}>
      <Text style={[styles.title, { color: currentTheme.colors.text }]}>Player de Música</Text>
      <Text style={[styles.modeText, { color: currentTheme.colors.text }]}>
        Modo: {DRIVING_MODE_NAMES[currentMode]}
      </Text>
      
      <View style={styles.trackInfo}>
        <Text style={[styles.trackTitle, { color: currentTheme.colors.text }]}>
          {currentTrackInfo.title}
        </Text>
        <Text style={[styles.trackArtist, { color: currentTheme.colors.subtext }]}>
          {currentTrackInfo.artist}
        </Text>
      </View>
      
      <View style={styles.progressContainer}>
        <Text style={[styles.timeText, { color: currentTheme.colors.subtext }]}>
          {formatTime(position)}
        </Text>
        <View style={[styles.progressBar, { backgroundColor: currentTheme.colors.border }]}>
          <View 
            style={[
              styles.progressFill, 
              { 
                backgroundColor: currentTheme.colors.primary,
                width: `${(position / Math.max(duration, 1)) * 100}%`
              }
            ]} 
          />
        </View>
        <Text style={[styles.timeText, { color: currentTheme.colors.subtext }]}>
          {formatTime(duration)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  modeText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  trackInfo: {
    marginBottom: 16,
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  trackArtist: {
    fontSize: 14,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressBar: {
    flex: 1,
    height: 4,
    marginHorizontal: 8,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  timeText: {
    fontSize: 12,
    width: 40,
    textAlign: 'center',
  },
})