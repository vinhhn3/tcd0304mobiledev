import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

function ScreenA({ navigation }) {
  const onPressHanlder = () => {
    navigation.navigate("ScreenB");
  };

  return (
    <View>
      <Text>ScreenA</Text>
      <Button title="Go to Screen B" onPress={onPressHanlder} />
    </View>
  );
}

function ScreenB({ navigation }) {
  const onPressHanlder = () => {
    navigation.navigate("ScreenA");
  };

  return (
    <View>
      <Text>ScreenB</Text>
      <Button title="Go to Screen A" onPress={onPressHanlder} />
    </View>
  );
}

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
