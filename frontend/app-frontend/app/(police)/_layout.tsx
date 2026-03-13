import { Text } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export default function PoliceLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
  name="create_fir"
  options={{
    headerShown: true,
    headerStyle: {
      backgroundColor: "#2563EB",
    },
    headerTintColor: "#ffffff",
    headerTitleAlign: "center",
    headerTitle: () => (
      <View>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Create New FIR
        </Text>
        <Text style={{ color: "#DBEAFE", fontSize: 12 }}>
          Step 1 of 2
        </Text>
      </View>
    ),
  }}
/>
      <Stack.Screen
  name="suggested_sections"
  options={{
    headerShown: true,
    headerStyle: {
      backgroundColor: "#2563EB",
    },
    headerTintColor: "#ffffff",
    headerTitleAlign: "center",

    headerTitle: () => (
      <View>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Suggested BNS Sections
        </Text>
        <Text style={{ color: "#DBEAFE", fontSize: 12 }}>
          Step 2 of 3
        </Text>
      </View>
    ),
  }}
/>
      <Stack.Screen 
      name="FirDetails" 
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#2563EB",
        },
        headerTintColor: "#ffffff",
        headerTitle: ""
      }}
      />
      <Stack.Screen
  name="review_fir"
  options={{
    headerShown: true,
    headerStyle: {
      backgroundColor: "#2563EB",
    },
    headerTintColor: "#ffffff",
    headerTitleAlign: "center",

    headerTitle: () => (
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "#ffffff",
            fontSize: moderateScale(18),
            fontWeight: "bold",
          }}
        >
          Review FIR Details
        </Text>

        <Text
          style={{
            color: "#DBEAFE",
            fontSize: moderateScale(12),
          }}
        >
          Step 3 of 3
        </Text>
      </View>
    ),
  }}
/>

    </Stack>
  );
}
