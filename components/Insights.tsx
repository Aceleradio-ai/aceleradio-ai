import { View, Text, StyleSheet } from "react-native"
import { useTheme } from "../contexts/ThemeContext"

export const Insights = () => {
  const { currentTheme } = useTheme()
  
  return (
    <View style={[styles.container, { 
      backgroundColor: currentTheme.colors.accent,
      borderColor: currentTheme.colors.border
    }]}>
      <Text style={[styles.title, { color: currentTheme.colors.text }]}>
        Driving Insights
      </Text>
      <Text style={[styles.content, { color: currentTheme.colors.text }]}>
        Your driving analytics and insights will appear here
      </Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  }
})