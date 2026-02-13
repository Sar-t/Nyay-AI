import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function PoliceDashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Police Dashboard</Text>
        <Pressable style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </Pressable>
      </View>
      <Text style={styles.welcomeText}>Welcome, Officer</Text>  
      <View style={styles.content}>
        <View style={styles.gridContainer}>
          <Pressable style={styles.card} onPress={() => router.push("/(police)/smart-fir-filing")}>
            <Text style={styles.cardIcon}>📄</Text>
            <Text style={styles.cardText}>Smart FIR Filing</Text>
          </Pressable>

          <Pressable style={styles.card} onPress={() => router.push("/(police)/view-firs")}>
            <Text style={styles.cardIcon}>📁</Text>
            <Text style={styles.cardText}>View Filed FIRs</Text>
          </Pressable>

          <Pressable style={styles.card} onPress={() => router.push("/(police)/suggested-sections")}>
            <Text style={styles.cardIcon}>💡</Text>
            <Text style={styles.cardText}>Suggested Sections</Text>
          </Pressable>

          <Pressable style={styles.card} onPress={() => router.push("/(police)/case-similarity")}>
            <Text style={styles.cardIcon}>🔍</Text>
            <Text style={styles.cardText}>Case Similarity</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#4a6fa5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    paddingTop: 48,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    color: "#fff",
    fontSize: 24,
  },
  content: {
    flexDirection: "row",
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4a6fa5",
    textAlign: "center",
    marginBottom: 30,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  card: {
    backgroundColor: "#4a6fa5",
    width: "48%",
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
