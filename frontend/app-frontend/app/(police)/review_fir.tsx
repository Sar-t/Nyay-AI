import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import ButtonComp from "../components/ButtonComp";
import MessageBanner from "../components/MessageBanner";
import InfoRow from "../components/InfoRow";
import { router } from "expo-router";

const ReviewFIR = () => {
    const handleSubmitFIR = ()=>{
        router.push("/(police)/fir_submitted")
    }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Banner */}
        <MessageBanner
          text="📄 Please review all details carefully before submitting the FIR."
          containerStyle={styles.banner}
          textColor={{ color: "#1D4ED8" }}
        />

        {/* Crime Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Crime Details</Text>

          <InfoRow
            label="Crime Description"
            value="No description provided"
          />
        </View>

        {/* Incident Information */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Incident Information</Text>

          <View style={styles.row}>
            <View style={{ width: "48%" }}>
              <InfoRow label="Date" value="Not specified" />
            </View>

            <View style={{ width: "48%" }}>
              <InfoRow label="Time" value="Not specified" />
            </View>
          </View>

          <InfoRow label="Location" value="Not specified" />
          <InfoRow label="Police Station" value="Not specified" />
        </View>

        {/* Victim Info */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Victim Information</Text>

          <InfoRow label="Name" value="Not specified" />

          <View style={styles.row}>
            <View style={{ width: "48%" }}>
              <InfoRow label="Age" value="Not specified" />
            </View>

            <View style={{ width: "48%" }}>
              <InfoRow label="Gender" value="Not specified" />
            </View>
          </View>

          <InfoRow label="Address" value="Not specified" />
        </View>

        {/* Selected Sections */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Selected BNS Sections</Text>

          <Text style={styles.noSections}>No sections selected</Text>

          <Text style={styles.link}>
            Go back and select sections
          </Text>
        </View>

        {/* Submit Button */}
        <ButtonComp
          title="Submit FIR"
          containerStyle={styles.submitButton}
          onPress={handleSubmitFIR}
        />

        <ButtonComp
          title="Edit FIR Details"
          containerStyle={styles.editButton}
          textStyle={{ color: "#155DFC" }}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewFIR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: scale(20),
  },

  header: {
    alignItems: "center",
    marginBottom: verticalScale(18),
  },

  banner: {
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    marginBottom: verticalScale(16),
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(14),
    padding: scale(16),
    marginBottom: verticalScale(16),
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    marginBottom: verticalScale(10),
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  noSections: {
    fontSize: moderateScale(14),
    color: "#6B7280",
    textAlign: "center",
    marginTop: verticalScale(10),
  },

  link: {
    fontSize: moderateScale(14),
    color: "#155DFC",
    textAlign: "center",
    marginTop: verticalScale(4),
  },

  submitButton: {
    marginTop: verticalScale(10),
  },

  editButton: {
    marginTop: verticalScale(12),
    backgroundColor: "transparent",
    borderColor: "#155DFC",
  },
});