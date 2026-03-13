import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const MessageBanner = ({text,containerStyle,textColor}:any) => {
  return (
    <View style={[styles.container,containerStyle]}>
        <Text style={[styles.text,textColor]}>{text}</Text>
    </View>
  )
}

export default MessageBanner

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: verticalScale(66),
        borderRadius: moderateScale(14),
        borderWidth: moderateScale(1),
        justifyContent: "center",
        paddingHorizontal: scale(14)
    },
    text:{
        fontSize: moderateScale(12),
        textAlign: "center"
    }
})