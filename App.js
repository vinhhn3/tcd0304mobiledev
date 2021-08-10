import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "#e6e6e6",
          width: 250,
        }}
        edgeWidth={900}
        initialRouteName="ScreenB"
        hideStatueBar={false}
      >
        <Drawer.Screen
          options={{
            title: "This is Screen B Title",
            drawerIcon: () => (
              <Ionicons name="md-person" size={24} color="black" />
            ),
          }}
          name="ScreenA"
          component={ScreenA}
        />
        <Drawer.Screen
          options={{
            title: "This is Screen B Title",
            drawerIcon: () => (
              <Ionicons name="md-person" size={24} color="black" />
            ),
          }}
          name="ScreenB"
          component={ScreenB}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//

const styles = StyleSheet.create({});
