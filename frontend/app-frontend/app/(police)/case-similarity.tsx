import { View, Text, Pressable, StyleSheet, ScrollView, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function CaseSimilarity() {
  const router = useRouter();

  const similarCases = [
    {
      id: "FIR/2025/012890",
      title: "Robbery at jewelry shop",
      similarity: 94,
      date: "15 Dec 2025",
      location: "Chandni Chowk, Delhi",
      status: "Solved",
      outcome: "Accused arrested, property recovered",
      investigationTime: "12 days",
      officer: "SI Rajesh Verma",
      tags: ["Robbery", "Property Crime", "Armed"],
    },
    {
      id: "FIR/2025/011234",
      title: "Armed robbery at commercial complex",
      similarity: 89,
      date: "08 Nov 2025",
      location: "Nehru Place, Delhi",
      status: "Solved",
      outcome: "2 accused arrested",
      investigationTime: "18 days",
      officer: "Inspector Priya Singh",
      tags: ["Robbery", "Armed", "Multiple Suspects"],
    },
    {
      id: "FIR/2024/087654",
      title: "Theft in residential area",
      similarity: 85,
      date: "22 Oct 2024",
      location: "Dwarka, Delhi",
      status: "Solved",
      outcome: "Property partially recovered",
      investigationTime: "25 days",
      officer: "SI Amit Kumar",
      tags: ["Theft", "Residential", "Property Crime"],
    },
    {
      id: "FIR/2024/065432",
      title: "Robbery at bank ATM",
      similarity: 82,
      date: "05 Sep 2024",
      location: "Karol Bagh, Delhi",
      status: "Under Investigation",
      outcome: "Investigation ongoing",
      investigationTime: "45+ days",
      officer: "Inspector Vikram Rao",
      tags: ["Robbery", "Financial", "ATM"],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Case Similarity Analysis</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.currentCaseCard}>
        <Text style={styles.currentCaseLabel}>Current Case</Text>
        <Text style={styles.currentCaseTitle}>Robbery at MG Road Shop</Text>
        <Text style={styles.currentCaseId}>FIR/2026/001234</Text>
        <View style={styles.currentCaseTags}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Robbery</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Commercial</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Armed</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search similar cases..."
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoIcon}>🤖</Text>
        <View style={styles.infoContent}>
          <Text style={styles.infoTitle}>AI-Powered Analysis</Text>
          <Text style={styles.infoText}>
            Found {similarCases.length} similar cases based on crime type, location, and MO pattern
          </Text>
        </View>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable style={[styles.filterChip, styles.filterChipActive]}>
            <Text style={[styles.filterChipText, styles.filterChipTextActive]}>Highest Match</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Recent</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Solved Only</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Same Area</Text>
          </Pressable>
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        {similarCases.map((caseItem, index) => (
          <Pressable key={index} style={styles.caseCard}>
            <View style={styles.caseHeader}>
              <View style={styles.caseHeaderLeft}>
                <Text style={styles.caseId}>{caseItem.id}</Text>
                <View style={[
                  styles.statusBadge,
                  caseItem.status === "Solved" && styles.statusSolved,
                  caseItem.status === "Under Investigation" && styles.statusInProgress
                ]}>
                  <Text style={styles.statusText}>{caseItem.status}</Text>
                </View>
              </View>
              <View style={styles.similarityBadge}>
                <Text style={styles.similarityNumber}>{caseItem.similarity}%</Text>
                <Text style={styles.similarityLabel}>Similar</Text>
              </View>
            </View>

            <Text style={styles.caseTitle}>{caseItem.title}</Text>

            <View style={styles.caseDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailIcon}>📅</Text>
                <Text style={styles.detailText}>{caseItem.date}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailIcon}>📍</Text>
                <Text style={styles.detailText}>{caseItem.location}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailIcon}>👮</Text>
                <Text style={styles.detailText}>{caseItem.officer}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailIcon}>⏱️</Text>
                <Text style={styles.detailText}>Resolved in {caseItem.investigationTime}</Text>
              </View>
            </View>

            <View style={styles.outcomeBox}>
              <Text style={styles.outcomeLabel}>Outcome:</Text>
              <Text style={styles.outcomeText}>{caseItem.outcome}</Text>
            </View>

            <View style={styles.tagsContainer}>
              {caseItem.tags.map((tag, tagIndex) => (
                <View key={tagIndex} style={styles.caseTag}>
                  <Text style={styles.caseTagText}>{tag}</Text>
                </View>
              ))}
            </View>

            <View style={styles.actionButtons}>
              <Pressable style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View Full Case</Text>
              </Pressable>
              <Pressable style={styles.compareButton}>
                <Text style={styles.compareButtonText}>Compare Details</Text>
              </Pressable>
            </View>
          </Pressable>
        ))}

        <Pressable style={styles.loadMoreButton}>
          <Text style={styles.loadMoreText}>Load More Similar Cases</Text>
        </Pressable>
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
  currentCaseCard: {
    backgroundColor: "#4a6fa5",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
  },
  currentCaseLabel: {
    fontSize: 12,
    color: "#b3c7e6",
    marginBottom: 4,
  },
  currentCaseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  currentCaseId: {
    fontSize: 14,
    color: "#d4e1f5",
    marginBottom: 12,
  },
  currentCaseTags: {
    flexDirection: "row",
    gap: 8,
  },
  tag: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchBox: {
    backgroundColor: "#fff",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    backgroundColor: "#fff3e0",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffb74d",
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
    color: "#e65100",
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    color: "#ef6c00",
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
  caseCard: {
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
  caseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  caseHeaderLeft: {
    flex: 1,
  },
  caseId: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  statusSolved: {
    backgroundColor: "#e8f5e9",
  },
  statusInProgress: {
    backgroundColor: "#fff3e0",
  },
  statusText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#666",
  },
  similarityBadge: {
    backgroundColor: "#e3f2fd",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    minWidth: 70,
    borderWidth: 1,
    borderColor: "#2196f3",
  },
  similarityNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1976d2",
  },
  similarityLabel: {
    fontSize: 10,
    color: "#1565c0",
  },
  caseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  caseDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 8,
    width: 20,
  },
  detailText: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  outcomeBox: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  outcomeLabel: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  outcomeText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  caseTag: {
    backgroundColor: "#e8eaf6",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  caseTagText: {
    fontSize: 11,
    color: "#5c6bc0",
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
  compareButton: {
    flex: 1,
    backgroundColor: "#4a6fa5",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  compareButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  loadMoreButton: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4a6fa5",
  },
  loadMoreText: {
    color: "#4a6fa5",
    fontSize: 16,
    fontWeight: "600",
  },
});
