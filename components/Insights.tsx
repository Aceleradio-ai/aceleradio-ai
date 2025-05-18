import { View, Text, StyleSheet, Image } from "react-native"
import { useTheme } from "../contexts/ThemeContext"

const drivingMessages = {
  calm: [
    "Ótimo trabalho! Sua condução está calma e segura.",
    "Continue assim! Você está dirigindo de forma excelente.",
    "Sua condução tranquila economiza combustível e reduz o desgaste do veículo.",
    "Talvez você chegue atrasado.",
    "Você está dirigindo muito devagar."
  ],
  moderate: [
    "Atenção! Você está começando a acelerar mais que o necessário.",
    "Cuidado com a velocidade em curvas. Mantenha a calma.",
    "Você tá se empolgando!",
    "Deve ser um bom dia para você!",

  ],
  aggressive: [
    "ALERTA! Você ultrapassou o limite de velocidade!",
    "Reduza a velocidade imediatamente! Sua condução está perigosa.",
    "Freadas bruscas detectadas. Por favor, dirija com mais cuidado.",
    "Você tá se empolgando!",
    "Agora vai.",
  ]
}

export const Insights = () => {
  const { currentTheme, drivingBehavior } = useTheme()
  
  // Get a random message for the current driving mode
  const getRandomMessage = () => {
    const messages = drivingMessages[drivingBehavior]
    const randomIndex = Math.floor(Math.random() * messages.length)
    return messages[randomIndex]
  }
  
  return (
    <View style={[styles.container, { 
      backgroundColor: currentTheme.colors.accent,
      borderColor: currentTheme.colors.border
    }]}>
      <View style={styles.messageContainer}>
        <View style={[styles.iconContainer, { backgroundColor: currentTheme.colors.primary }]}>
          <Text style={styles.iconText}>AI</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: currentTheme.colors.text }]}>
            Assistente IA
          </Text>
          <Text style={[styles.content, { color: currentTheme.colors.text }]}>
            {getRandomMessage()}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
  }
})