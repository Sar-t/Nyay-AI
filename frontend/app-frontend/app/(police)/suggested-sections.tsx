import { View, Text, Pressable, StyleSheet, ScrollView, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function SuggestedSections() {
  const router = useRouter();

  const sections = [
    {
      section: "IPC 302",
      title: "Murder",
      description: "Punishment for murder",
      confidence: 95,
      cases: 245,
      punishment: "Death or Life Imprisonment",
      category: "Serious",
    },
    {
      section: "IPC 379",
      title: "Theft",
      description: "Punishment for theft",
      confidence: 88,
      cases: 1520,
      punishment: "Imprisonment up to 3 years or fine",
      category: "Property",
    },
    {
      section: "IPC 323",
      title: "Voluntarily Causing Hurt",
      description: "Punishment for voluntarily causing hurt",
      confidence: 92,
      cases: 890,
      punishment: "Imprisonment up to 1 year or fine up to ₹1000",
      category: "Injury",
    },
    {
      section: "IPC 420",
      title: "Cheating",
      description: "Cheating and dishonestly inducing delivery of property",
      confidence: 85,
      cases: 2150,
      punishment: "Imprisonment up to 7 years and fine",
      category: "Fraud",
    },
    {
      section: "IPC 376",
      title: "Rape",
      description: "Punishment for rape",
      confidence: 78,
      cases: 456,
      punishment: "Imprisonment not less than 10 years",
      category: "Serious",
    },
    {
      section: "IPC 406",
      title: "Criminal Breach of Trust",
      description: "Punishment for criminal breach of trust",
      confidence: 82,
      cases: 678,
      punishment: "Imprisonment up to 3 years or fine",
      category: "Fraud",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Suggested IPC Sections</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by section number or crime type..."
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoIcon}>💡</Text>
        <View style={styles.infoContent}>
          <Text style={styles.infoTitle}>AI-Powered Suggestions</Text>
          <Text style={styles.infoText}>
            Sections are suggested based on case description analysis and historical data
          </Text>
        </View>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable style={[styles.filterChip, styles.filterChipActive]}>
            <Text style={[styles.filterChipText, styles.filterChipTextActive]}>All</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Serious</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Property</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Fraud</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Injury</Text>
          </Pressable>
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        {sections.map((item, index) => (
          <Pressable key={index} style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionNumber}>{item.section}</Text>
                <View style={[styles.categoryBadge, 
                  item.category === "Serious" && styles.categorySerious,
                  item.category === "Property" && styles.categoryProperty,
                  item.category === "Fraud" && styles.categoryFraud,
                  item.category === "Injury" && styles.categoryInjury
                ]}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
              </View>
              <View style={styles.confidenceBox}>
                <Text style={styles.confidenceNumber}>{item.confidence}%</Text>
                <Text style={styles.confidenceLabel}>Match</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>{item.title}</Text>
            <Text style={styles.sectionDescription}>{item.description}</Text>

            <View style={styles.divider} />

            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailIcon}>⚖️</Text>
                <View style={styles.detailTextContainer}>
                  <Text style={styles.detailLabel}>Punishment</Text>
                  <Text style={styles.detailValue}>{item.punishment}</Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailIcon}>📊</Text>
                <View style={styles.detailTextContainer}>
                  <Text style={styles.detailLabel}>Similar Cases</Text>
                  <Text style={styles.detailValue}>{item.cases} cases on record</Text>
                </View>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <Pressable style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View Full Details</Text>
              </Pressable>
              <Pressable style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Section</Text>
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
  placeholder: {
    width: 40,
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
  infoCard: {
    backgroundColor: "#e3f2fd",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#90caf9",
  },
  infoIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    color: "#1565c0",
  },
  filterContainer: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  filterChip: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  filterChipActive: {
    backgroundColor: "#4a6fa5",
  },
  filterChipText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  filterChipTextActive: {
    color: "#fff",
  },
  content: {
    flex: 1,
  },
  sectionCard: {
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
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  sectionTitleContainer: {
    flex: 1,
  },
  sectionNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4a6fa5",
    marginBottom: 8,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  categorySerious: {
    backgroundColor: "#ffebee",
  },
  categoryProperty: {
    backgroundColor: "#e8f5e9",
  },
  categoryFraud: {
    backgroundColor: "#fff3e0",
  },
  categoryInjury: {
    backgroundColor: "#f3e5f5",
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#666",
  },
  confidenceBox: {
    backgroundColor: "#e8f5e9",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    minWidth: 60,
    borderWidth: 1,
    borderColor: "#4caf50",
  },
  confidenceNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e7d32",
  },
  confidenceLabel: {
    fontSize: 10,
    color: "#2e7d32",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 12,
  },
  detailsContainer: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  detailIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: "#999",
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 8,
  },
  viewButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#4a6fa5",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  viewButtonText: {
    color: "#4a6fa5",
    fontSize: 14,
    fontWeight: "600",
  },
  applyButton: {
    flex: 1,
    backgroundColor: "#4a6fa5",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
