import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen
      name="login"
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
      name="create_account" 
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
      name="verify_otp"
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
      name="address_details"
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
      name="create_password"
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
      name="police_verify" 
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#2563EB",
        },
        headerTintColor: "#ffffff",
        headerTitle: ""
      }}
      />
    </Stack>
  );
}
