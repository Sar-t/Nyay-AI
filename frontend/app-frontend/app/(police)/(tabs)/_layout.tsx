import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#155DFC",
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
        },
      }}
    >
      <Tabs.Screen
  name="dashboard"
  options={{
    title: "Police Dashboard",
   headerShown: true,


    header: () => (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Police Dashboard</Text>
          <Text style={styles.headerSubtitle}>
            Inspector Raj Singh{"\n"}Central Police Station
          </Text>
        </View>

        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={22} color="white" />
          <Ionicons name="settings-outline" size={22} color="white" />
        </View>
      </View>
    ),

    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home-outline" size={size} color={color} />
    ),
  }}
/>

      <Tabs.Screen
        name="FirRecords"
        options={{
          title: "FIR Records",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="forecast"
        options={{
          title: "Forecast",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },

  headerSubtitle: {
    color: "white",
    fontSize: 13
  },

  headerIcons: {
    flexDirection: "row",
    gap: 12
  },
})