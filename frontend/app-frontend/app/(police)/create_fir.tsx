import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import FormInput from "../components/FormInput";
import ButtonComp from "../components/ButtonComp";
import MessageBanner from "../components/MessageBanner";
import { router } from "expo-router";

const CreateFIR = () => {
  const handleAnalyzeCrime = ()=>{
    router.push({
      pathname: "/(police)/suggested_sections",
    })
  } 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Crime Details */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Crime Details</Text>

          <FormInput
            inputLabel="Crime Description *"
            placeholder="Describe the incident in detail..."
            inputFieldStyle={styles.textArea}
          />

          <Text style={styles.helperText}>
            * Provide detailed information for accurate BNS section suggestions
          </Text>
        </View>

        {/* Incident Details */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Incident Details</Text>

          <View style={styles.row}>
            <FormInput
              inputLabel="Incident Date"
              placeholder="Date"
              containerStyle={styles.halfInput}
            />

            <FormInput
              inputLabel="Incident Time"
              placeholder="Time"
              containerStyle={styles.halfInput}
            />
          </View>

          <FormInput
            inputLabel="Incident Address"
            placeholder="Enter incident location"
          />

          <FormInput
            inputLabel="Police Station"
            placeholder="Enter police station"
          />
        </View>

        {/* Victim Information */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Victim Information</Text>

          <FormInput
            inputLabel="Victim Name"
            placeholder="Enter victim's full name"
          />

          <View style={styles.row}>
            <FormInput
              inputLabel="Age"
              placeholder="Age"
              containerStyle={styles.halfInput}
            />

            <FormInput
              inputLabel="Gender"
              placeholder="Gender"
              containerStyle={styles.halfInput}
            />
          </View>

          <FormInput
            inputLabel="Victim Address"
            placeholder="Enter victim's address"
          />
        </View>

        {/* AI Message */}
        <MessageBanner
          text="The system will analyze the description and suggest applicable BNS Sections."
          containerStyle={styles.banner}
          textColor={{ color: "#1D4ED8" }}
        />

        {/* Button */}
        <ButtonComp
          title="Analyze Crime"
          containerStyle={styles.button}
          onPress={handleAnalyzeCrime}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateFIR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: scale(20),
  },

  header: {
    alignItems: "center",
    marginBottom: verticalScale(20),
  },

  headerTitle: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
  },

  headerStep: {
    fontSize: moderateScale(13),
    color: "#6B7280",
    marginTop: verticalScale(4),
  },

  sectionCard: {
    backgroundColor: "white",
    borderRadius: moderateScale(14),
    padding: scale(16),
    marginBottom: verticalScale(18),
    borderWidth: 1,
    borderColor: "#E5E7EB",
    gap: verticalScale(14),
  },

  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
  },

  helperText: {
    fontSize: moderateScale(11),
    color: "#6B7280",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  halfInput: {
    width: "48%",
  },

  textArea: {
    height: verticalScale(100),
    textAlignVertical: "top",
  },

  banner: {
    borderColor: "#BFDBFE",
    backgroundColor: "#EFF6FF",
    marginBottom: verticalScale(20),
  },

  button: {
    marginBottom: verticalScale(30),
  },
});