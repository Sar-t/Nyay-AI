import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const DetailRow = ({ icon, label, value }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default DetailRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(12),
    marginBottom: verticalScale(14),
  },

  iconBox: {
    width: scale(36),
    height: scale(36),
    borderRadius: 10,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: moderateScale(16),
  },

  label: {
    fontSize: moderateScale(12),
    color: "#6B7280",
  },

  value: {
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
});