import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function CitizenDashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Citizen Dashboard</Text>
        <Pressable style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.gridContainer}>
          <Pressable style={styles.card}>
            <Text style={styles.cardIcon}>🗺️</Text>
            <Text style={styles.cardText}>Crime Heat Map</Text>
          </Pressable>

          <Pressable style={styles.card}>
            <Text style={styles.cardIcon}>📁</Text>
            <Text style={styles.cardText}>Area Crime Reports</Text>
          </Pressable>

          <Pressable style={styles.card}>
            <Text style={styles.cardIcon}>📈</Text>
            <Text style={styles.cardText}>Crime Forecast</Text>
          </Pressable>

          <Pressable style={styles.card}>
            <Text style={styles.cardIcon}>📋</Text>
            <Text style={styles.cardText}>My FIR Reports</Text>
          </Pressable>

          <Pressable style={[styles.card, styles.cardWide]}>
            <Text style={styles.cardIcon}>🔍</Text>
            <Text style={styles.cardText}>Similar Cases</Text>
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
    flex: 1,
    padding: 20,
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
  cardWide: {
    width: "48%",
    marginLeft: "26%",
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
