import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";

const InfoRow = ({ label, value }: any) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || "Not specified"}</Text>
    </View>
  );
};

export default InfoRow;

const styles = StyleSheet.create({
  row: {
    marginBottom: verticalScale(10),
  },

  label: {
    fontSize: moderateScale(12),
    color: "#6B7280",
  },

  value: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    color: "#111827",
  },
});