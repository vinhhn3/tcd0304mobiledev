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
      <Drawer.Navigator>
        <Drawer.Screen name="ScreenA" component={ScreenA} />
        <Drawer.Screen name="ScreenB" component={ScreenB} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//

const styles = StyleSheet.create({});
