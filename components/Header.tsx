import { View, Text, StyleSheet } from "react-native"
import { H3, H6 } from "tamagui"

export const Header = () => {
  return (
    <View style={styles.header}>
      <H3 style={styles.title}>Aceleradio.ai</H3>
      <H6 style={styles.subtitle}>Your AI-powered driving assistant</H6>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#b91c1c',
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  }
})