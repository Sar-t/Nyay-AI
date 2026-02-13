import { View, Text, Pressable, StyleSheet, ScrollView, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function ViewFIRs() {
  const router = useRouter();

  const firData = [
    {
      id: "FIR/2026/001234",
      type: "Theft",
      date: "10 Feb 2026",
      status: "Under Investigation",
      complainant: "Rajesh Kumar",
      location: "MG Road, Delhi",
      statusColor: "#ff9800",
    },
    {
      id: "FIR/2026/001235",
      type: "Assault",
      date: "09 Feb 2026",
      status: "Evidence Collection",
      complainant: "Priya Sharma",
      location: "Sector 15, Noida",
      statusColor: "#2196f3",
    },
    {
      id: "FIR/2026/001236",
      type: "Burglary",
      date: "08 Feb 2026",
      status: "Closed",
      complainant: "Amit Verma",
      location: "Green Park, Delhi",
      statusColor: "#4caf50",
    },
    {
      id: "FIR/2026/001237",
      type: "Fraud",
      date: "07 Feb 2026",
      status: "Under Investigation",
      complainant: "Sneha Gupta",
      location: "Connaught Place, Delhi",
      statusColor: "#ff9800",
    },
    {
      id: "FIR/2026/001238",
      type: "Robbery",
      date: "06 Feb 2026",
      status: "Pending",
      complainant: "Vikram Singh",
      location: "Rohini, Delhi",
      statusColor: "#f44336",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Filed FIRs</Text>
        <Pressable style={styles.filterButton}>
          <Text style={styles.filterIcon}>⚙</Text>
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search FIR ID, Type, or Location..."
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <View style={styles.filterChipsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable style={[styles.chip, styles.chipActive]}>
            <Text style={[styles.chipText, styles.chipTextActive]}>All</Text>
          </Pressable>
          <Pressable style={styles.chip}>
            <Text style={styles.chipText}>Pending</Text>
          </Pressable>
          <Pressable style={styles.chip}>
            <Text style={styles.chipText}>Under Investigation</Text>
          </Pressable>
          <Pressable style={styles.chip}>
            <Text style={styles.chipText}>Closed</Text>
          </Pressable>
          <Pressable style={styles.chip}>
            <Text style={styles.chipText}>This Week</Text>
          </Pressable>
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Total FIRs</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Closed</Text>
          </View>
        </View>

        {firData.map((fir, index) => (
          <Pressable key={index} style={styles.firCard}>
            <View style={styles.firHeader}>
              <Text style={styles.firId}>{fir.id}</Text>
              <View style={[styles.statusBadge, { backgroundColor: fir.statusColor }]}>
                <Text style={styles.statusText}>{fir.status}</Text>
              </View>
            </View>
            
            <View style={styles.firBody}>
              <View style={styles.firRow}>
                <Text style={styles.firLabel}>Type:</Text>
                <Text style={styles.firValue}>{fir.type}</Text>
              </View>
              <View style={styles.firRow}>
                <Text style={styles.firLabel}>Date:</Text>
                <Text style={styles.firValue}>{fir.date}</Text>
              </View>
              <View style={styles.firRow}>
                <Text style={styles.firLabel}>Complainant:</Text>
                <Text style={styles.firValue}>{fir.complainant}</Text>
              </View>
              <View style={styles.firRow}>
                <Text style={styles.firLabel}>Location:</Text>
                <Text style={styles.firValue}>{fir.location}</Text>
              </View>
            </View>

            <View style={styles.firFooter}>
              <Pressable style={styles.actionButton}>
                <Text style={styles.actionButtonText}>View Details</Text>
              </Pressable>
              <Pressable style={[styles.actionButton, styles.secondaryButton]}>
                <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>Update Status</Text>
              </Pressable>
            </View>
          </Pressable>
        ))}
      </ScrollView>
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
  filterButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    color: "#fff",
    fontSize: 24,
  },
  searchContainer: {
    backgroundColor: "#4a6fa5",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchBox: {
    backgroundColor: "#fff",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  filterChipsContainer: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  chip: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: "#4a6fa5",
  },
  chipText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  chipTextActive: {
    color: "#fff",
  },
  content: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    gap: 8,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4a6fa5",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  firCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  firHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  firId: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  firBody: {
    marginBottom: 12,
  },
  firRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  firLabel: {
    fontSize: 14,
    color: "#666",
    width: 100,
    fontWeight: "500",
  },
  firValue: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  firFooter: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#4a6fa5",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#4a6fa5",
  },
  secondaryButtonText: {
    color: "#4a6fa5",
  },
});
