import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import SectionCard from "../components/SectionCard";
import ButtonComp from "../components/ButtonComp";
import MessageBanner from "../components/MessageBanner";
import { router } from "expo-router";

const sectionsData = [
  {
    id: 1,
    section: "BNS 103",
    description:
      "Punishment for murder - Whoever commits murder shall be punished with death or imprisonment for life.",
    match: 92,
  },
  {
    id: 2,
    section: "BNS 115",
    description:
      "Abetment of offence - Whoever abets the commission of an offence shall be punished.",
    match: 85,
  },
  {
    id: 3,
    section: "BNS 238",
    description:
      "Causing hurt by means of poison - Whoever causes hurt by administering poison.",
    match: 78,
  },
  {
    id: 4,
    section: "BNS 303",
    description:
      "Theft - Whoever takes dishonestly any movable property out of possession of any person.",
    match: 65,
  },
  {
    id: 5,
    section: "BNS 351",
    description:
      "Criminal intimidation - Whoever threatens another with injury to their person or property.",
    match: 58,
  },
];

const SuggestedSections = () => {
  const [selectedSections, setSelectedSections] = useState<number[]>([]);
  const handleContinuePress = ()=>{
    router.push("/(police)/review_fir")
  }
  const toggleSection = (id: number) => {
    if (selectedSections.includes(id)) {
      setSelectedSections(selectedSections.filter((item) => item !== id));
    } else {
      setSelectedSections([...selectedSections, id]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>


        {/* AI Banner */}
        <MessageBanner
          text="AI Analysis Complete. Based on the crime description the following BNS sections are suggested."
          containerStyle={styles.aiBanner}
          textColor={{ color: "#374151" }}
        />

        {/* Selected Count */}
        <View style={styles.selectedBox}>
          <Text style={styles.selectedText}>
            {selectedSections.length} section selected
          </Text>
        </View>

        {/* Sections List */}
        {sectionsData.map((item) => (
          <SectionCard
            key={item.id}
            section={item.section}
            description={item.description}
            match={item.match}
            selected={selectedSections.includes(item.id)}
            onPress={() => toggleSection(item.id)}
          />
        ))}

        {/* Warning */}
        <MessageBanner
          text="⚠️ You can select multiple sections. Review all suggestions carefully before proceeding."
          containerStyle={styles.warningBanner}
          textColor={{ color: "#92400E" }}
        />

        {/* Continue Button */}
        <ButtonComp title="Continue to Review" onPress={handleContinuePress}/>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SuggestedSections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: scale(20),
  },

  header: {
    alignItems: "center",
    marginBottom: verticalScale(16),
  },

  title: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
  },

  step: {
    fontSize: moderateScale(13),
    color: "#6B7280",
  },

  aiBanner: {
    backgroundColor: "#F3F4F6",
    borderColor: "#D1D5DB",
    marginBottom: verticalScale(12),
  },

  selectedBox: {
    backgroundColor: "#EFF6FF",
    borderRadius: moderateScale(12),
    padding: scale(12),
    marginBottom: verticalScale(16),
    alignItems: "center",
  },

  selectedText: {
    color: "#155DFC",
    fontSize: moderateScale(14),
    fontWeight: "600",
  },

  warningBanner: {
    backgroundColor: "#FEF3C7",
    borderColor: "#FCD34D",
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
});