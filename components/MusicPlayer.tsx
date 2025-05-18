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
        Player de Música
      </Text>
      <Text style={[styles.subtitle, { color: currentTheme.colors.background }]}>
        Suas músicas serão tocadas aqui com base no seu modo de condução
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  }
})