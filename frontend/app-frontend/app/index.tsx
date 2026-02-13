import { Text, View, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>⚖️</Text>
        <Text style={styles.title}>Nyay AI</Text>
        <Text style={styles.subtitle}>Your AI Legal Assistant</Text>

        <Text style={styles.selectText}>Select Your Role</Text>

        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.policeButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push("/(auth)/login?userType=police")}
          >
            <Text style={styles.buttonIcon}>👮</Text>
            <Text style={styles.buttonTitle}>Police Officer</Text>
            <Text style={styles.buttonSubtitle}>Law Enforcement Access</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.citizenButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push("/(auth)/login?userType=citizen")}
          >
            <Text style={styles.buttonIcon}>👤</Text>
            <Text style={styles.buttonTitle}>Citizen</Text>
            <Text style={styles.buttonSubtitle}>Legal Guidance & Support</Text>
          </Pressable>
        </View>

        <Text style={styles.footerText}>
          Get instant legal guidance powered by AI
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  logo: {
    fontSize: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 40,
  },
  selectText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 24,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 400,
    gap: 20,
  },
  button: {
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 2,
  },
  policeButton: {
    backgroundColor: "#1e40af",
    borderColor: "#1e40af",
    shadowColor: "#1e40af",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  citizenButton: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
    shadowColor: "#2563eb",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  buttonSubtitle: {
    color: "#e0e7ff",
    fontSize: 14,
  },
  footerText: {
    fontSize: 14,
    color: "#999",
    marginTop: 40,
    textAlign: "center",
  },
});
