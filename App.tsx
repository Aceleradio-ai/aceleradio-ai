import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DrivingMode } from './components/DrivingMode';
import { MusicPlayer } from './components/MusicPlayer';
import { Insights } from './components/Insights';
import { Header } from './components/Header';
import { createTamagui, TamaguiProvider } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'

const config = createTamagui(defaultConfig)

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        <Header />
        <DrivingMode />
        <MusicPlayer />
        <Insights />
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
})
