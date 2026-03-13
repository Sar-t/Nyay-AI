import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComp from "./ButtonComp";

const statusColors:any = {
  Approved: "#DCFCE7",
  "Under Review": "#FEF3C7",
  Submitted: "#DBEAFE",
  Rejected: "#FEE2E2",
};

const statusTextColors:any = {
  Approved: "#16A34A",
  "Under Review": "#D97706",
  Submitted: "#2563EB",
  Rejected: "#DC2626",
};

const FIRCard = ({ fir, handlePress }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>

        <Text style={styles.firNumber}>{fir.number}</Text>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: statusColors[fir.status] },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              { color: statusTextColors[fir.status] },
            ]}
          >
            {fir.status}
          </Text>
        </View>
      </View>

      <Text style={styles.crime}>{fir.crime}</Text>

      <Text style={styles.victim}>
        Victim: {fir.victim}
      </Text>

      <Text style={styles.date}>📅 {fir.date}</Text>

      <ButtonComp
        title="View Details"
        containerStyle={styles.button}
        onPress={handlePress}
      />
    </View>
  );
};

export default FIRCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(14),
    padding: scale(16),
    marginBottom: verticalScale(14),
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  firNumber: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: "#155DFC",
  },

  statusBadge: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(3),
    borderRadius: 20,
  },

  statusText: {
    fontSize: moderateScale(11),
    fontWeight: "600",
  },

  crime: {
    fontSize: moderateScale(15),
    fontWeight: "500",
    marginTop: verticalScale(6),
  },

  victim: {
    fontSize: moderateScale(13),
    color: "#6B7280",
    marginTop: verticalScale(4),
  },

  date: {
    fontSize: moderateScale(12),
    color: "#6B7280",
    marginTop: verticalScale(4),
  },

  button: {
    marginTop: verticalScale(10),
  },
});