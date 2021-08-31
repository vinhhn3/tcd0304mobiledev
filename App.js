import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Users from "./screens/Users";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "Login Screen",
            // eslint-disable-next-line react/display-name
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            title: "Home Screen",
            // eslint-disable-next-line react/display-name
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
