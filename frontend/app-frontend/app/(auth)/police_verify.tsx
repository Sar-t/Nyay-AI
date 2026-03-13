import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { router, useLocalSearchParams } from 'expo-router'
import { OtpInput } from 'react-native-otp-entry'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'
import ButtonComp from '../components/ButtonComp'

const PoliceVerify = () => {

    const { userType } = useLocalSearchParams()
    const handleSubmit = ()=>{
        router.push({
            pathname: "/(auth)/account_created",
            params: {userType}
        })
    }

    return (
    <ScrollView>
    <SafeAreaView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
        <Text style={styles.header_heading}>Verify Your Identity</Text>
        <Text style={styles.header_desc}>
            Upload your ID and verify your phone
        </Text>
        </View>

        {/* Upload Section */}
        <View style={styles.uploadSection}>

        <Text style={styles.uploadTitle}>Upload Police ID Card</Text>

        <Pressable style={styles.uploadBox}>
            <Ionicons
            name="cloud-upload-outline"
            color="#9CA3AF"
            />

            <Text style={styles.uploadText}>Click to upload</Text>

            <Text style={styles.uploadSubText}>
            PNG, JPG or PDF (Max 5MB)
            </Text>
        </Pressable>

        </View>

        {/* OTP Section */}
        <View style={styles.otpSection}>

        <Text style={styles.otpTitle}>
            Enter OTP sent to your phone
        </Text>

        <OtpInput
            numberOfDigits={4}
            focusColor="#1D4ED8"
            autoFocus
            onTextChange={(text) => console.log(text)}
            theme={{
            pinCodeContainerStyle: styles.otpInput,
            focusedPinCodeContainerStyle: styles.otpInputFocused
            }}
        />

        <Pressable>
            <Text style={styles.resend}>Resend OTP</Text>
        </Pressable>

        </View>

        <ButtonComp title={"Submit for Verification"} onPress={handleSubmit}/>

        {/* Info Box */}
        <View style={styles.infoBox}>

        <Ionicons
            name="information-circle-outline"
            size={moderateScale(18)}
            color="#1E40AF"
        />

        <Text style={styles.infoText}>
            Your account will be verified by the admin team.
            This may take 24-48 hours.
        </Text>

        </View>

    </SafeAreaView>
    </ScrollView>
    )
}

export default PoliceVerify


const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: scale(24),
    gap: verticalScale(30)
  },

  header: {
    alignItems: "center",
    marginTop: verticalScale(10)
  },

  header_heading: {
    fontSize: moderateScale(24),
    fontWeight: "700"
  },

  header_desc: {
    fontSize: moderateScale(16),
    textAlign: "center",
    color: "#6B7280",
    marginTop: verticalScale(6)
  },

  uploadSection: {
    gap: verticalScale(10)
  },

  uploadTitle: {
    fontSize: moderateScale(16),
    fontWeight: "500"
  },

  uploadBox: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(35),
    alignItems: "center",
    gap: verticalScale(6)
  },

  uploadText: {
    fontSize: moderateScale(16),
    fontWeight: "500"
  },

  uploadSubText: {
    fontSize: moderateScale(13),
    color: "#6B7280"
  },

  otpSection: {
    gap: verticalScale(12)
  },

  otpTitle: {
    fontSize: moderateScale(16),
    fontWeight: "500"
  },

  otpInput: {
    width: scale(60),
    height: verticalScale(60),
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: moderateScale(12)
  },

  otpInputFocused: {
    borderColor: "#1D4ED8"
  },

  resend: {
    textAlign: "center",
    color: "#1D4ED8",
    fontWeight: "500"
  },
  infoBox: {
    flexDirection: "row",
    gap: scale(6),
    padding: scale(14),
    borderRadius: moderateScale(12),
    backgroundColor: "#DBEAFE"
  },

  infoText: {
    flex: 1,
    fontSize: moderateScale(13),
    color: "#1E40AF"
  }

})