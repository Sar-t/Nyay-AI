import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Image } from 'expo-image'
import imagePaths from '@/constants/imagePaths'
import { router, useLocalSearchParams } from 'expo-router'
import FormInput from '../components/FormInput'
import ButtonComp from '../components/ButtonComp'
import MessageBanner from '../components/MessageBanner'
const Login = () => { 
  const {userType} = useLocalSearchParams();
  const handleRegisterPress = ()=>{
    router.push({
      pathname: "/(auth)/create_account",
      params: {userType: `${userType}`}
    })
  }
  const handleLoginPress = ()=>{
    router.replace("/(police)/(tabs)/dashboard")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={imagePaths.welcome} style={styles.header_img}/>
        <View style={styles.header_text_container}>
        <Text style={styles.heading}>{userType=="Citizen"?"Citizen Portal":"Police Portal"}</Text>
        <Text style={styles.header_desc}>Sign in with your credentials</Text>
        </View>
      </View>
      <View style={styles.form}>
        {userType == "Police"?
        <FormInput placeholder='Enter your badge number' inputLabel='Badge Number'/>
        :
        <FormInput placeholder='Enter your email or phone' inputLabel='Email or Phone Number'/>
        }
        <FormInput placeholder='Enter your password' inputLabel='Password'/>
        <View style={styles.forgot_container}>
          <View></View>
          <Text style={styles.link_text}>Forgot Password?</Text>
        </View>
        <ButtonComp title={"Login"} onPress={handleLoginPress}/>
        {userType == "Citizen" &&
        <View style={{gap: verticalScale(15)}}>
          <View style={styles.or}>
            <View style={styles.horizontal_line} />
            <Text >or</Text>
            <View style={styles.horizontal_line} />
          </View>
          <ButtonComp title={"Login with OTP"} onPress={()=>{router.push(`/(auth)/verify_otp?userType="${userType}"`)}}/>
        </View>
        }
      </View>
      <View>
        {userType == "Citizen"?
        <View style={{flexDirection: "row"}}>
          <Text style={styles.text}>Don't have an account?</Text> 
          <Pressable onPress={handleRegisterPress}><Text style={styles.link_text}> Sign up</Text></Pressable>
        </View>:
        <View style={{flexDirection: "row"}}>
          <Text style={styles.text}>New Officer?</Text> 
          <Pressable onPress={handleRegisterPress}><Text style={styles.link_text}> Register here</Text></Pressable>
        </View>
        }
      </View>
      {userType == "Police" && <MessageBanner textStyle={styles.textStyle} containerStyle={styles.messageContainerStyle} text={"🔒 This is a secure portal for authorized personnel only. Unauthorized access is prohibited."}/>}
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    paddingHorizontal: scale(24),
    gap: verticalScale(32)
  },
  header:{
    alignItems: "center"
  },
  heading:{
    color: "#101828",
    fontSize: moderateScale(24),
    fontWeight: "bold"
  },
  header_text_container:{
    alignItems: "center",
    gap: verticalScale(8)
  },
  header_desc:{
    color: "#4A5565",
    fontSize: moderateScale(16)
  },
  header_img:{
    height: moderateScale(80),
    width: moderateScale(80)
  },
  form:{
    width: "100%",
    gap: moderateScale(15)
  },
  forgot_container:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  link_text:{
    color: "#193CB8",
    fontSize: moderateScale(16)
  },
  horizontal_line:{
    height: verticalScale(1),
    backgroundColor: "#D1D5DC",
    flex: 1,
  },
  or:{
    flexDirection: "row",
    gap: scale(10),
    alignItems: "center"
  },
  text:{
    fontSize: moderateScale(16),
  },
  textStyle:{
    color: "#973C00"
  },
  messageContainerStyle:{
    backgroundColor: "#FFFBEB",
    borderColor: "#FEE685"
  }

})