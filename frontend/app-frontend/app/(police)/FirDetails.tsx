import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import ButtonComp from "../components/ButtonComp";
import DetailCard from "../components/DetailCard";
import SectionBadge from "../components/SectionBadge";

const FIRDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Status */}
        <View style={styles.statusCard}>
          <View>
            <Text style={styles.statusLabel}>Current Status</Text>
            <Text style={styles.statusSub}>Case Type: Theft</Text>
          </View>

          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Under Review</Text>
          </View>
        </View>

        {/* Incident Info */}
        <DetailCard title="Incident Information">

          <Text style={styles.label}>Crime Description</Text>
          <Text style={styles.desc}>
            The complainant reported that their house was broken into while
            they were away, resulting in the theft of jewelry and cash amounting
            to ₹50,000.
          </Text>

          <Text style={styles.info}>📅 8th March 2026 &nbsp;&nbsp; ⏰ 8:35 AM</Text>

          <Text style={styles.info}>📍 House No. 45, Sector 12</Text>
          <Text style={styles.info}>Police Station: Civil Lines</Text>

        </DetailCard>

        {/* Victim Info */}
        <DetailCard title="Victim Details">

          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Rajesh Kumar</Text>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Age</Text>
              <Text style={styles.value}>42 years</Text>
            </View>

            <View>
              <Text style={styles.label}>Gender</Text>
              <Text style={styles.value}>Male</Text>
            </View>
          </View>

          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>No. 45, Sector 12, Delhi</Text>

        </DetailCard>

        {/* BNS Sections */}
        <DetailCard title="Applicable BNS Sections">

          <SectionBadge
            title="BNS 303"
            description="Theft - Whoever takes dishonestly any movable property."
          />

          <SectionBadge
            title="BNS 351"
            description="House breaking by night."
          />

        </DetailCard>

        {/* Case Status */}
        <DetailCard title="Case Status">

          <Text style={styles.label}>Filed</Text>
          <Text style={styles.value}>10 March 2026</Text>

          <Text style={styles.label}>Last Updated</Text>
          <Text style={styles.value}>10 March 2026, 3:45 PM</Text>

        </DetailCard>

        {/* Investigation Notes */}
        <DetailCard title="Investigation Notes">

          <TextInput
            placeholder="Add investigation notes or updates"
            style={styles.textArea}
            multiline
          />

          <ButtonComp
            title="Save Notes"
            containerStyle={{ marginTop: verticalScale(10) }}
          />

        </DetailCard>

        {/* Update Status */}
        <DetailCard title="Update Status">

          <Text style={styles.label}>Change FIR Status</Text>

          <View style={styles.statusInput}>
            <Text>Under Review ▼</Text>
          </View>

          <ButtonComp
            title="Confirm Status Change"
            containerStyle={styles.confirmBtn}
          />

        </DetailCard>

        {/* Back Button */}
        <ButtonComp
          title="Return to FIR List"
          containerStyle={styles.backBtn}
          textStyle={{ color: "#155DFC" }}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default FIRDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: scale(20),
  },

  statusCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: scale(16),
    marginBottom: verticalScale(14),
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  statusLabel: {
    fontSize: moderateScale(12),
    color: "#6B7280",
  },

  statusSub: {
    fontSize: moderateScale(14),
    fontWeight: "600",
  },

  statusBadge: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(4),
    borderRadius: 20,
  },

  statusText: {
    color: "#D97706",
    fontSize: moderateScale(12),
    fontWeight: "600",
  },

  label: {
    fontSize: moderateScale(12),
    color: "#6B7280",
  },

  value: {
    fontSize: moderateScale(14),
    marginBottom: verticalScale(8),
  },

  desc: {
    fontSize: moderateScale(13),
    marginBottom: verticalScale(10),
    color: "#374151",
  },

  info: {
    fontSize: moderateScale(12),
    color: "#6B7280",
    marginBottom: verticalScale(4),
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#D1D5DC",
    borderRadius: 12,
    padding: scale(12),
    height: verticalScale(80),
    textAlignVertical: "top",
  },

  statusInput: {
    borderWidth: 1,
    borderColor: "#D1D5DC",
    borderRadius: 12,
    padding: scale(12),
    marginBottom: verticalScale(10),
  },

  confirmBtn: {
    backgroundColor: "#16A34A",
  },

  backBtn: {
    backgroundColor: "transparent",
    borderColor: "#155DFC",
    marginBottom: verticalScale(30),
  },
});