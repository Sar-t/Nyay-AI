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

import FIRCard from "../../components/FIRCard";
import { router } from "expo-router";

const FIRRecords = () => {

  const firData = [
    {
      number: "FIR-2026-001234",
      crime: "Theft",
      victim: "Rajesh Kumar",
      date: "10 Mar 2026",
      status: "Approved",
    },
    {
      number: "FIR-2026-001233",
      crime: "Assault",
      victim: "Priya Sharma",
      date: "09 Mar 2026",
      status: "Under Review",
    },
    {
      number: "FIR-2026-001232",
      crime: "Fraud",
      victim: "Amit Singh",
      date: "09 Mar 2026",
      status: "Submitted",
    },
    {
      number: "FIR-2026-001231",
      crime: "Robbery",
      victim: "Sunita Verma",
      date: "08 Mar 2026",
      status: "Approved",
    },
    {
      number: "FIR-2026-001230",
      crime: "Cybercrime",
      victim: "Arjun Patel",
      date: "07 Mar 2026",
      status: "Rejected",
    },
    {
      number: "FIR-2026-001229",
      crime: "Domestic Violence",
      victim: "Neha Gupta",
      date: "07 Mar 2026",
      status: "Under Review",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <Text style={styles.title}>FIR Records</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search by FIR number, crime"
            style={styles.searchInput}
          />

          <View style={styles.filter}>
            <Text>⚙️</Text>
          </View>
        </View>

        {/* Info Row */}
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            Showing 6 FIR records
          </Text>

          <Text style={styles.sort}>
            Sort by Date ▼
          </Text>
        </View>

        {/* FIR List */}
        {firData.map((fir, index) => (
          <FIRCard key={index} fir={fir} handlePress={()=>{router.push("/(police)/FirDetails")}}/>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
};

export default FIRRecords;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: scale(20),
  },

  title: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    marginBottom: verticalScale(12),
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(14),
  },

  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(10),
  },

  filter: {
    marginLeft: scale(10),
    backgroundColor: "#fff",
    padding: scale(10),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(12),
  },

  infoText: {
    fontSize: moderateScale(12),
    color: "#6B7280",
  },

  sort: {
    fontSize: moderateScale(12),
    color: "#155DFC",
  },
});