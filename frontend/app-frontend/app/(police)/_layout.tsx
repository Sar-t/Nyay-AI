import { Stack } from "expo-router";

export default function PoliceLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="smart-fir-filing" />
      <Stack.Screen name="view-firs" />
      <Stack.Screen name="suggested-sections" />
      <Stack.Screen name="case-similarity" />
    </Stack>
  );
}
