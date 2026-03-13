import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { verifyBeforeUpdateEmail } from 'firebase/auth'

const FormInput = ({inputLabel,placeholder,containerStyle,inputFieldStyle,labelStyle }:any) => {
  return (
    <View style={[styles.container,containerStyle]}>
        <Text style={[styles.inputLabel,labelStyle]}>{inputLabel}</Text>
        <TextInput style={[styles.inputField,inputFieldStyle]}placeholder={placeholder}/>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
    container:{
      gap: verticalScale(9)
    },
    inputLabel:{
      fontSize: moderateScale(14),
      fontWeight: "medium"
    },
    inputField:{
      fontSize: moderateScale(16),
      paddingHorizontal: scale(16),
      paddingVertical: verticalScale(12),
      borderWidth: moderateScale(1),
      borderColor: "#D1D5DC",
      borderRadius: moderateScale(14)
    }
})  