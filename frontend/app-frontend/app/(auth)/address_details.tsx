import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import FormInput from '../components/FormInput'
import ButtonComp from '../components/ButtonComp'
import { router, useLocalSearchParams } from 'expo-router'

const AddressDetails = () => {
    const {userType} = useLocalSearchParams();
    const handleContinuePress = ()=>{
        router.push({
            pathname: "/(auth)/create_password",
            params: {userType}
        })
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header_heading}>Your Address</Text>
            <Text style={styles.header_desc}>Provide your current address</Text>
        </View>
        <View style={styles.form}>
            <FormInput inputLabel={"State"} placeholder={""}/>
            <FormInput inputLabel={"City"} placeholder={"Enter your city"}/>
            <FormInput inputLabel={"Address"} placeholder={"Enter your full address"} inputFieldStyle={styles.addressField}/>
            <FormInput inputLabel={"Pincode"} placeholder={"Enter your pincode"}/>
        </View>
        <ButtonComp title={"Continue"} onPress={handleContinuePress}/>

    </SafeAreaView>
  )
}

export default AddressDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        width: "100%",
        paddingHorizontal: scale(24),
        gap: verticalScale(30)
    },
    header:{
        alignItems: "center"
    },
    header_heading:{
        fontSize: moderateScale(24),
        fontWeight: "bold"
    },
    header_desc:{
        fontSize: moderateScale(16),
        textAlign: "center"
    },
    form:{
        width: "100%",
        gap: verticalScale(10)
    },
    addressField:{
        paddingHorizontal: scale(16),
        paddingVertical: verticalScale(12),
        height: verticalScale(100),
        textAlignVertical:"top"
    }
})