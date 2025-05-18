import { View, StyleSheet, Image } from "react-native"
import { H3, H6 } from "tamagui"
import { useTheme } from "../contexts/ThemeContext"

export const Header = () => {
  const { currentTheme, drivingBehavior } = useTheme()
  
  const getLogo = () => {
    switch(drivingBehavior) {
      case 'calm':
        return require('../assets/logo_calmo_sem_texto_sem_fundo.png')
      case 'moderate':
        return require('../assets/logo_moderado_sem_texto_sem_fundo.png')
      case 'aggressive':
      default:
        return require('../assets/logo_sem_texto_sem_fundo.png')
    }
  }
  
  return (
    <View style={[
      styles.header, 
      { 
        backgroundColor: currentTheme.colors.primary, 
        boxShadow: `0 0 10px 0 ${currentTheme.colors.shadow}` 
      }
    ]}>
      <View style={styles.logoContainer}>
        <Image 
          source={getLogo()} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <View>
          <H3 style={[
            styles.title,
            { 
              color: currentTheme.colors.background 
            }
          ]}>
            Aceleradio.ai
          </H3>
          <H6 style={[
            styles.subtitle, 
            { 
              color: currentTheme.colors.background 
            }
          ]}>
            Your AI-powered driving assistant
          </H6>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingTop: 32,
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignItems: 'center',
    zIndex: 10,
  },
  logoContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  subtitle: {
    fontSize: 16,
  }
})