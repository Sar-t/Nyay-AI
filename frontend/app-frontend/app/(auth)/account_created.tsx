import { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function AccountCreated() {

  const router = useRouter();
  const { userType } = useLocalSearchParams();

  const [scaleAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleContinue = () => {
    if (userType === "Police") {
      router.replace("/");
    } else {
      router.replace("/(citizen)/dashboard");
    }
  };

  // =========================
  // POLICE VERIFICATION SCREEN
  // =========================
  if (userType === "Police") {
    return (
      <View style={styles.container}>
        <View style={styles.content}>

          <Animated.View
            style={[
              styles.iconContainer,
              { transform: [{ scale: scaleAnim }] },
            ]}
          >
            <View style={styles.verificationCircle}>
              <Text style={styles.clock}>🕒</Text>
            </View>
          </Animated.View>

          <Text style={styles.title}>Account Under Verification</Text>

          <Text style={styles.subtitle}>
            Your account is being verified by the admin team.
            You will receive a notification once your account is approved.
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Verification Time</Text>
            <Text style={styles.cardText}>
              Typically takes 24-48 hours
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>What's Next?</Text>
            <Text style={styles.cardText}>
              You'll receive an email and SMS once approved
            </Text>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </Pressable>

        </View>
      </View>
    );
  }

  // =========================
  // CITIZEN SUCCESS SCREEN
  // =========================

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Animated.View
          style={[
            styles.iconContainer,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <View style={styles.successCircle}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        </Animated.View>

        <Text style={styles.title}>Account Created!</Text>

        <Text style={styles.subtitle}>
          Your account has been successfully created.{"\n"}
          Welcome to Nyay AI!
        </Text>

        <View style={styles.featuresContainer}>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>⚖️</Text>
            <Text style={styles.featureText}>AI Legal Assistant</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📄</Text>
            <Text style={styles.featureText}>Smart Document Analysis</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🔒</Text>
            <Text style={styles.featureText}>Secure & Confidential</Text>
          </View>

        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>

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

  iconContainer: {
    marginBottom: 32,
  },

  successCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#10b981",
    justifyContent: "center",
    alignItems: "center",
  },

  verificationCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fde68a",
    justifyContent: "center",
    alignItems: "center",
  },

  clock: {
    fontSize: 50,
  },

  checkmark: {
    fontSize: 64,
    color: "#fff",
    fontWeight: "bold",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 12,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#f3f4f6",
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },

  cardText: {
    fontSize: 14,
    color: "#6b7280",
  },

  featuresContainer: {
    width: "100%",
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    padding: 24,
    marginBottom: 48,
    gap: 16,
  },

  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  featureIcon: {
    fontSize: 24,
  },

  featureText: {
    fontSize: 16,
    color: "#1a1a1a",
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },

  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

});