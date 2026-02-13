import { View, Text, Pressable, StyleSheet, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function SmartFIRFiling() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Smart FIR Filing</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Complainant Details</Text>
          
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter complainant name"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter address"
            multiline
            numberOfLines={3}
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            keyboardType="email-address"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Incident Details</Text>
          
          <Text style={styles.label}>Date of Incident</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Time of Incident</Text>
          <TextInput
            style={styles.input}
            placeholder="HH:MM"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Location of Incident</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter location details"
            multiline
            numberOfLines={3}
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Type of Crime</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Select crime type</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Incident Description</Text>
          
          <Text style={styles.label}>Detailed Description</Text>
          <TextInput
            style={[styles.input, styles.textArea, styles.largeTextArea]}
            placeholder="Provide detailed description of the incident..."
            multiline
            numberOfLines={6}
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Accused Details (if known)</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter details of the accused"
            multiline
            numberOfLines={3}
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Witness Details (if any)</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter witness information"
            multiline
            numberOfLines={3}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Suggestions</Text>
          <View style={styles.suggestionBox}>
            <Text style={styles.suggestionIcon}>💡</Text>
            <Text style={styles.suggestionText}>
              AI-suggested IPC sections will appear here after filling the details
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Evidence & Attachments</Text>
          <View style={styles.attachmentBox}>
            <Text style={styles.attachmentIcon}>📎</Text>
            <Text style={styles.attachmentText}>Upload Photos/Videos</Text>
          </View>
          <View style={styles.attachmentBox}>
            <Text style={styles.attachmentIcon}>📄</Text>
            <Text style={styles.attachmentText}>Upload Documents</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.draftButton}>
            <Text style={styles.draftButtonText}>Save as Draft</Text>
          </Pressable>
          <Pressable style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit FIR</Text>
          </Pressable>
        </View>
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
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
    color: "#333",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
    paddingTop: 12,
  },
  largeTextArea: {
    height: 120,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
    color: "#999",
  },
  dropdownIcon: {
    fontSize: 12,
    color: "#666",
  },
  suggestionBox: {
    backgroundColor: "#fff4e5",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffe0b2",
    flexDirection: "row",
    alignItems: "center",
  },
  suggestionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  suggestionText: {
    flex: 1,
    fontSize: 14,
    color: "#666",
  },
  attachmentBox: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#4a6fa5",
    borderRadius: 8,
    padding: 20,
    marginTop: 12,
    alignItems: "center",
  },
  attachmentIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  attachmentText: {
    fontSize: 14,
    color: "#4a6fa5",
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
    gap: 12,
  },
  draftButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#4a6fa5",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  draftButtonText: {
    color: "#4a6fa5",
    fontSize: 16,
    fontWeight: "bold",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#4a6fa5",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
