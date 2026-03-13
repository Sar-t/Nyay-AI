import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const SectionBadge = ({ title, description }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

export default SectionBadge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF6FF",
    borderRadius: moderateScale(10),
    padding: scale(12),
    marginBottom: verticalScale(8),
  },

  title: {
    fontSize: moderateScale(13),
    fontWeight: "600",
    color: "#155DFC",
  },

  desc: {
    fontSize: moderateScale(12),
    color: "#374151",
    marginTop: verticalScale(4),
  },
});