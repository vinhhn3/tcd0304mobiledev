import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//

const styles = StyleSheet.create({});
