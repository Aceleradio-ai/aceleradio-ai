import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useTheme } from "../contexts/ThemeContext"
import { ThemeType, themes } from "../constants/themes"

const drivingModeMap: Record<ThemeType, string> = {
  calm:       "Desanimado",
  moderate:   "Feliz",
  aggressive: "Nervoso"
}

export const DrivingMode = () => {
  const { currentTheme, drivingBehavior, setDrivingBehavior } = useTheme()

  const handleDrivingMode = (mode: ThemeType) => {
    setDrivingBehavior(mode)
  }

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.colors.background }]}>
      <Text style={[styles.title, { color: currentTheme.colors.text }]}>
        Modo de Condução: {drivingModeMap[drivingBehavior]}
      </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.modeButton, 
            { backgroundColor: themes.calm.colors.primary },
            drivingBehavior === 'calm' && styles.activeButton
          ]}
        >
          <Text style={styles.buttonText}>Desanimado</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.modeButton, 
            { backgroundColor: themes.moderate.colors.primary },
            drivingBehavior === 'moderate' && styles.activeButton
          ]}
        >
          <Text style={styles.buttonText}>Feliz</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.modeButton, 
            { backgroundColor: themes.aggressive.colors.primary },
            drivingBehavior === 'aggressive' && styles.activeButton
          ]}
        >
          <Text style={styles.buttonText}>Nervoso</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modeButton: {
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  activeButton: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})