import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Image } from 'expo-image'
import imagePaths from '@/constants/imagePaths'
import FormInput from '../components/FormInput'
import ButtonComp from '../components/ButtonComp'
import { router, useLocalSearchParams } from 'expo-router'
import { ScrollView } from 'react-native'

const CreateAccount = () => {
  const {userType} = useLocalSearchParams();
  const handleLoginPress = ()=>{
    router.push({
      pathname: "/(auth)/login",
      params: {userType}
    })
  }
  const handleContinuePress = ()=>{

    {userType == "Citizen"?
      router.push({
      pathname: "/(auth)/verify_otp",
      params: {userType}
      }):
      router.push({
        pathname: "/(auth)/police_verify",
        params: {userType}
      })
    }
  }
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={imagePaths.welcome} style={styles.image}/>
        <Text style={styles.header_heading}>{userType == "Citizen"?"Create Account":"Register Police Officer"}</Text>
        <Text style={styles.header_desc}>{userType == "Citizen"?"Fill in your details to get started":"Fill in your official details"}</Text>
      </View>
      <View style={styles.form}>
        <FormInput inputLabel={"Full Name"} placeholder={"Enter your full name"}/>
        {userType == "Police"?
        <View style={{gap: verticalScale(20)}}>
          <FormInput inputLabel={"Badge Number"} placeholder={"Enter your badge number"}/>
          <FormInput inputLabel={"Rank"} placeholder={""}/> 
          {/* TODO: create a drop drown list */}
          <FormInput inputLabel={"Police Station"} placeholder={""}/> 
          {/* TODO: create a drop down list */}
          <FormInput inputLabel={"Offical Email"} placeholder={"Enter your official email"}/>
        </View>:<FormInput inputLabel={"Email Address"} placeholder={"Enter your email"}/>
        }
        <FormInput inputLabel={"Phone Number"} placeholder={"Enter your phone number"}/>
        <ButtonComp title={"Continue"} onPress={handleContinuePress}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Already have an account?</Text>
        <Pressable onPress={handleLoginPress}><Text style={styles.link_text}>Login</Text></Pressable>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: scale(24),
    gap: verticalScale(24)
  },
  header:{
    alignItems: "center",
    width: "100%"
  },
  image:{
    height: verticalScale(80),
    width: scale(80)
  },
  header_heading:{
    fontSize: moderateScale(24),
    fontWeight: "bold"
  },
  header_desc:{
    fontSize: moderateScale(16)
  },
  form:{
    width: "100%",
    gap: verticalScale(20)
  },
  text:{
    fontSize: moderateScale(16)
  },
  link_text:{
    color: "#155DFC",
    fontSize: moderateScale(16)
  },
  footer:{
    flexDirection: "row"
  }

})