import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import Login from "./screens/Login";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            title: "Login Screen",
            // eslint-disable-next-line react/display-name
          }}
          name="Login"
          component={Login}
        />
        <Tab.Screen
          options={{
            title: "Home Screen",
            // eslint-disable-next-line react/display-name
          }}
          name="Home"
          component={Home}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//

const styles = StyleSheet.create({});
