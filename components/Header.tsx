import { View, Text, StyleSheet, Image } from "react-native"
import { H3, H6 } from "tamagui"

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo_sem_texto_sem_fundo.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <View>
          <H3 style={styles.title}>Aceleradio.ai</H3>
          <H6 style={styles.subtitle}>Your AI-powered driving assistant</H6>
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
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#b91c1c',
    alignItems: 'center',
    zIndex: 10,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
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
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  }
})