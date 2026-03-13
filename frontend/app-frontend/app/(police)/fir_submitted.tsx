import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import ButtonComp from "../components/ButtonComp";
import MessageBanner from "../components/MessageBanner";
import DetailRow from "../components/DetailRow";

const FIRSubmitted = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Success Icon */}
        <View style={styles.successIcon}>
          <Text style={styles.check}>✓</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>FIR Submitted Successfully!</Text>

        <Text style={styles.subtitle}>
          The FIR has been registered and saved to the system.
        </Text>

        {/* FIR Card */}
        <View style={styles.card}>
          <Text style={styles.firLabel}>FIR Number</Text>

          <Text style={styles.firNumber}>
            FIR-2026-379031
          </Text>

          <View style={styles.divider} />

          <DetailRow
            icon="📅"
            label="Filing Date"
            value="10 March 2026"
          />

          <DetailRow
            icon="📍"
            label="Police Station"
            value="Not specified"
          />

          <DetailRow
            icon="📄"
            label="BNS Sections Applied"
            value="0 sections"
          />
        </View>

        {/* Confirmation Banner */}
        <MessageBanner
          text="📧 A confirmation email has been sent to the registered police station email."
          containerStyle={styles.banner}
          textColor={{ color: "#1D4ED8" }}
        />

        {/* Buttons */}
        <ButtonComp
          title="View FIR Details"
          containerStyle={styles.primaryButton}
        />

        <ButtonComp
          title="Return to Dashboard"
          containerStyle={styles.secondaryButton}
          textStyle={{ color: "#155DFC" }}
        />

        {/* Divider */}
        <View style={styles.line} />

        {/* Quick Actions */}
        <Text style={styles.quickTitle}>Quick Actions</Text>

        <View style={styles.quickActions}>
          <View style={styles.quickBtn}>
            <Text style={styles.quickText}>File Another FIR</Text>
          </View>

          <View style={styles.quickBtn}>
            <Text style={styles.quickText}>Print FIR</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default FIRSubmitted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: scale(20),
  },

  successIcon: {
    width: scale(90),
    height: scale(90),
    borderRadius: 50,
    backgroundColor: "#DCFCE7",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: verticalScale(20),
    marginBottom: verticalScale(14),
  },

  check: {
    fontSize: moderateScale(40),
    color: "#16A34A",
    fontWeight: "bold",
  },

  title: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: moderateScale(14),
    color: "#6B7280",
    textAlign: "center",
    marginBottom: verticalScale(20),
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(16),
    padding: scale(18),
    marginBottom: verticalScale(16),
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  firLabel: {
    fontSize: moderateScale(13),
    color: "#6B7280",
    textAlign: "center",
  },

  firNumber: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    textAlign: "center",
    color: "#155DFC",
    marginVertical: verticalScale(8),
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: verticalScale(14),
  },

  banner: {
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    marginBottom: verticalScale(18),
  },

  primaryButton: {
    marginBottom: verticalScale(12),
  },

  secondaryButton: {
    backgroundColor: "transparent",
    borderColor: "#155DFC",
  },

  line: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: verticalScale(22),
  },

  quickTitle: {
    textAlign: "center",
    fontSize: moderateScale(13),
    color: "#6B7280",
    marginBottom: verticalScale(12),
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "center",
    gap: scale(14),
  },

  quickBtn: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    borderRadius: 12,
  },

  quickText: {
    fontSize: moderateScale(13),
    color: "#374151",
  },
});