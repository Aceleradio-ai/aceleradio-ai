import { View, Image, StyleSheet } from "react-native"
import { useTheme } from "../contexts/ThemeContext"

export const DrivingModeImage = () => {
  const { currentTheme, drivingBehavior } = useTheme()
  
  const getLargeImage = () => {
    switch(drivingBehavior) {
      case 'calm':
        return require('../assets/logo_desanimado_sem_texto_sem_fundo.png')
      case 'moderate':
        return require('../assets/logo_feliz_sem_texto_sem_fundo.png')
      case 'aggressive':
      default:
        return require('../assets/logo_sem_texto_sem_fundo.png')
    }
  }
  
  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: currentTheme.colors.background,
        borderColor: currentTheme.colors.border
      }
    ]}>
      <Image 
        source={getLargeImage()} 
        style={styles.image} 
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  }
}) 