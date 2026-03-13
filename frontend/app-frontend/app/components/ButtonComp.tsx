import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({title,textStyle, containerStyle, onPress}:any) => {
  return (
    <TouchableOpacity style={[styles.button_container,containerStyle]} activeOpacity={0.7} onPress={onPress}>
        <Text style={[styles.button_text,textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    button_container:{
        backgroundColor: "#155DFC",
        width: "100%",
        paddingVertical: verticalScale(12),
        borderRadius: moderateScale(15),
        borderWidth: 1
    },
    button_text:{
        fontSize: moderateScale(16),
        fontWeight: "semibold",
        color: "white",
        textAlign: "center"
    }
})