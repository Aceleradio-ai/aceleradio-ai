import { View, Text, StyleSheet } from "react-native"
import { useTheme } from "../contexts/ThemeContext"

export const MusicPlayer = () => {
  const { currentTheme } = useTheme()
  
  return (
    <View style={[styles.container, { 
      backgroundColor: currentTheme.colors.secondary,
      borderColor: currentTheme.colors.border
    }]}>
      <Text style={[styles.title, { color: currentTheme.colors.background }]}>
        Music Player
      </Text>
      <Text style={[styles.subtitle, { color: currentTheme.colors.background }]}>
        Your music will play here based on your driving behavior
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  }
})