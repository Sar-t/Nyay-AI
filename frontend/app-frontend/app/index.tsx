import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePaths from '@/constants/imagePaths'
import { Image } from 'expo-image'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import ButtonComp from './components/ButtonComp'
import { router } from 'expo-router'
import { useEffect, useState } from 'react';

const index = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(()=>{
    if(isLoggedIn){
      router.replace("/(police)/(tabs)/(dashboard)/dashboard")
    }
  },[isLoggedIn])
  const onPressByCitizen = ()=>{
    router.push({
      pathname: "/(auth)/login",
      params: {userType: "Citizen"}
    })
  }
  const onPressByPolice = ()=>{
    router.push({
      pathname: "/(auth)/login",
      params: {userType: "Police"}
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={imagePaths.welcome} style={styles.header_image}/>
        <Text style={styles.header_text}>Nyay AI</Text>
        <Text style={styles.header_desc_text}>Report crimes easily and get legal guidance using AI</Text>
      </View>
      <View style={styles.body}>
        <ButtonComp title={"Continue as Citizen"} onPress={onPressByCitizen}/>
        <ButtonComp title={"Continue as Police Officer"} onPress={onPressByPolice} textStyle={{color: "#155DFC"}} containerStyle={{backgroundColor: "#ffffff",borderColor: "#155DFC"}}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer_text}>Powered by Government of India</Text>
      </View>
    </SafeAreaView>
  )
}

export default index;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingVertical: verticalScale(120),
    paddingHorizontal: scale(16),
    gap: verticalScale(48)
  },
  header:{
    alignItems: "center",
    gap: verticalScale(12),
    
  },
  header_text:{
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "#101828",
  },
  body:{
    width: "100%",
    gap: 16
  },
  footer:{},
  header_image:{
    height: 100,
    width: 100
  },
  header_desc_text:{
    color:"#4A5565",
    paddingHorizontal: scale(27),
    textAlign: "center"
  },
  footer_text:{
    color: "#6A7282",
    fontSize: moderateScale(12)
  }

})


