import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import FormInput from '../components/FormInput'
import ButtonComp from '../components/ButtonComp'
import { router, useLocalSearchParams } from 'expo-router'

const create_password = () => {
    const {userType} = useLocalSearchParams();
    const handleCreateAccountPress = ()=>{
        router.push({
            pathname: "/account_created",
            params: {userType}
        })
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header_heading}>Create Address</Text>
            <Text style={styles.header_desc}>Set a strong password for your account</Text>
        </View>
        <View style={styles.form}>
            <View>
                <FormInput inputLabel={"Password"} placeholder={"Enter password"}/>
                <Text style={{color:"#6A7282"}}>Must be atleast 8 characters</Text>
            </View>
            <FormInput inputLabel={"Confirm Password"} placeholder={"Re-enter password"}/>
            <View style={{flexDirection: "row" , flexWrap:"wrap", justifyContent: "center"}}>
                <Text style={styles.text}>I agree to the </Text>
                <Pressable><Text style={styles.link_text}>Terms and Conditions </Text></Pressable>
                <Text style={styles.text}>and </Text>
                <Pressable><Text style={styles.link_text}>Privacy Policy</Text></Pressable>
            </View>
            <ButtonComp title={"Create Account"} onPress={handleCreateAccountPress}/>
        </View>
    </SafeAreaView>
  )
}

export default create_password

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: "100%",
        paddingHorizontal: scale(24),
        gap: verticalScale(32)
    },
    header:{
        alignItems: "center",
        width: "100%"
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
        gap: verticalScale(20)
    },
    text:{
        color: "#364153",
        fontSize: moderateScale(14)
    },
    link_text:{
        color: "#155DFC",
        fontSize: moderateScale(14)
    }
})