import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

interface Props {
  section: string;
  description: string;
  match: number;
  selected: boolean;
  onPress: () => void;
}

const SectionCard = ({
  section,
  description,
  match,
  selected,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={[
        styles.card,
        selected && styles.selectedCard
      ]}
      onPress={onPress}
    >
      <View style={styles.headerRow}>
        <View style={styles.radioContainer}>
          <View style={[styles.radio, selected && styles.radioSelected]} />
        </View>

        <Text style={styles.sectionTitle}>{section}</Text>

        <Text style={styles.matchText}>{match}% match</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      {/* Match Progress */}
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progress,
            { width: `${match}%` }
          ]}
        />
      </View>
    </Pressable>
  );
};

export default SectionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(14),
    padding: scale(16),
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: verticalScale(12),
  },

  selectedCard: {
    borderColor: "#155DFC",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(6),
  },

  radioContainer: {
    marginRight: scale(10),
  },

  radio: {
    width: scale(18),
    height: scale(18),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#9CA3AF",
  },

  radioSelected: {
    backgroundColor: "#155DFC",
    borderColor: "#155DFC",
  },

  sectionTitle: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    flex: 1,
    color: "#155DFC",
  },

  matchText: {
    fontSize: moderateScale(12),
    color: "#6B7280",
  },

  description: {
    fontSize: moderateScale(13),
    color: "#4B5563",
    marginBottom: verticalScale(8),
  },

  progressBar: {
    height: verticalScale(5),
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
  },

  progress: {
    height: "100%",
    backgroundColor: "#22C55E",
    borderRadius: 10,
  },
});