import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function PoliceDashboard() {

  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      {/* FIR Filing */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>FIR Filing</Text>
        <Text style={styles.cardDesc}>Create and register a new FIR</Text>

        <Pressable
          style={[styles.button, { backgroundColor: "#2563eb" }]}
          onPress={() => router.push("/(police)/create_fir")}
        >
          <Text style={styles.buttonText}>File FIR</Text>
        </Pressable>
      </View>

      {/* View Past FIRs */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>View Past FIRs</Text>
        <Text style={styles.cardDesc}>
          View and manage previously filed FIR cases
        </Text>

        <Pressable
          style={[styles.button, { backgroundColor: "#6366f1" }]}
          onPress={() => router.push("/(police)/(tabs)/FirRecords")}
        >
          <Text style={styles.buttonText}>View FIR Records</Text>
        </Pressable>
      </View>

      {/* Crime Forecasts */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Crime Forecasts</Text>
        <Text style={styles.cardDesc}>
          AI-powered crime predictions and patterns
        </Text>

        <Pressable
          style={[styles.button, { backgroundColor: "#a855f7" }]}
          onPress={() => router.push("/(police)/(tabs)/forecast")}
        >
          <Text style={styles.buttonText}>View Forecasts</Text>
        </Pressable>
      </View>

      {/* Quick Stats */}
      <Text style={styles.sectionTitle}>Quick Stats</Text>

      <View style={styles.statsGrid}>

        <View style={[styles.statCard, { borderColor: "#3b82f6" }]}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statText}>Filed Today</Text>
        </View>

        <View style={[styles.statCard, { borderColor: "#f59e0b" }]}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statText}>Under Review</Text>
        </View>

        <View style={[styles.statCard, { borderColor: "#22c55e" }]}>
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statText}>Approved Cases</Text>
        </View>

        <View style={[styles.statCard, { borderColor: "#ef4444" }]}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statText}>Pending Cases</Text>
        </View>

      </View>

      {/* Recent FIR Activity */}
      <Text style={styles.sectionTitle}>Recent FIR Activity</Text>

      <View style={styles.activityCard}>
        <Text style={styles.firTitle}>FIR-2026-001234</Text>
        <Text style={styles.firDesc}>Theft</Text>
        <Text style={styles.statusApproved}>Approved</Text>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.firTitle}>FIR-2026-001233</Text>
        <Text style={styles.firDesc}>Assault</Text>
        <Text style={styles.statusReview}>Under Review</Text>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.firTitle}>FIR-2026-001232</Text>
        <Text style={styles.firDesc}>Fraud</Text>
        <Text style={styles.statusSubmitted}>Submitted</Text>
      </View>

      <Pressable onPress={() => router.push("/(police)/(tabs)/FirRecords")}>
        <Text style={styles.viewAll}>View All FIRs →</Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 16
  },

  icon: {
    fontSize: 20,
    color: "white"
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    elevation: 3
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },

  cardDesc: {
    color: "#6b7280",
    marginVertical: 4
  },

  button: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 10
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  statCard: {
    width: "48%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
    alignItems: "center"
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "bold"
  },

  statText: {
    color: "#6b7280"
  },

  activityCard: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10
  },

  firTitle: {
    fontWeight: "bold"
  },

  firDesc: {
    color: "#6b7280"
  },

  statusApproved: {
    color: "#16a34a",
    fontWeight: "bold"
  },

  statusReview: {
    color: "#f59e0b",
    fontWeight: "bold"
  },

  statusSubmitted: {
    color: "#2563eb",
    fontWeight: "bold"
  },

  viewAll: {
    textAlign: "center",
    color: "#2563eb",
    marginTop: 10,
    fontWeight: "600"
  }

});