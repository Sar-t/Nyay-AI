import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { OtpInput } from "react-native-otp-entry"
import ButtonComp from '../components/ButtonComp'
import { router } from 'expo-router'
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks'
import { ScrollView } from 'react-native'
const VerifyOTP = () => {
    const [otp,setOtp] = useState("");
    const {userType} = useLocalSearchParams();
    const handleVerifyPress = ()=>{
        router.push({
            pathname: "/(auth)/address_details",
            params: {userType}
        })
    }
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header_heading}>Verify Phone Number</Text>
            <Text style={styles.header_desc}>Enter the four digit code sent to your phone</Text>
        </View>
        <View style={styles.otpInput}>
            <OtpInput
            numberOfDigits={4}
            onTextChange={(text) => setOtp(text)}
            focusColor="#007AFF"
            />
        </View>
        <View style={{flexDirection: "row"}}>
            <Text style={styles.text}>Didn't receive the code?</Text>
            <Pressable><Text style={styles.link_text}> Resend OTP</Text></Pressable>
        </View>
        <ButtonComp title={"Verify"} onPress={handleVerifyPress}/>
    </SafeAreaView>
    </ScrollView>
  )
}

export default VerifyOTP

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: "100%",
        paddingHorizontal: scale(24),
        gap: verticalScale(32)
    },
    header:{
        width: "100%",
        alignItems: "center",
        gap: verticalScale(8)
    },
    header_heading:{
        fontSize: moderateScale(24),
        fontWeight: "bold"
    },
    header_desc:{
        fontSize: moderateScale(16),
        textAlign: "center"
    },
    otpInput:{

    },
    text:{
        fontSize: moderateScale(16),
        color: "#4A5565"
    },
    link_text:{
        fontSize: moderateScale(16),
        color: "#155DFC"
    }
})