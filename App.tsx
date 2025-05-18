import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { DrivingMode } from './components/DrivingMode'
import { MusicPlayer } from './components/MusicPlayer'
import { Insights } from './components/Insights'
import { Header } from './components/Header'
import { DrivingModeImage } from './components/DrivingModeImage'
import { createTamagui, TamaguiProvider } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'
import { ThemeProvider } from './contexts/ThemeContext'
import { useTheme } from './contexts/ThemeContext'

const config = createTamagui(defaultConfig)

function AppContent() {
  const { currentTheme } = useTheme()
  
  return (
    <View style={[
      styles.container, 
      { backgroundColor: currentTheme.colors.background }
    ]}>
      <Header />
      <View style={styles.content}>
        <DrivingMode />
        <DrivingModeImage />
        <MusicPlayer />
        <Insights />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 32,
  },
  content: {
    width: '100%',
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  }
})
