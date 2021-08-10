import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === "ScreenA") {
              return (
                <FontAwesome
                  name="bars"
                  size={24}
                  color={focused ? "#f0f" : "#555"}
                />
              );
            } else if (route.name === "ScreenB") {
              return (
                <Ionicons
                  name="md-person"
                  size={24}
                  color={focused ? "#f0f" : "#555"}
                />
              );
            }
          },
        })}
      >
        <Tab.Screen name="ScreenA" component={ScreenA} />
        <Tab.Screen name="ScreenB" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//

const styles = StyleSheet.create({});
