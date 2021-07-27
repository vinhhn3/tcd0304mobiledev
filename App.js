import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  // Properties
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("This is my Name");

  // Function
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  // main() function
  return (
    // View = <div class='container'>
    <View style={styles.container}>
      <Text style={styles.text}>Hello Wolrd !!!</Text>
      <Text
      // style={{
      //   backgroundColor: "blue",
      // }}
      >
        Counter: {counter}
      </Text>
      <Text>{name}</Text>
      <Button onPress={increaseCounter} title="Increase" color="#006400" />
      <Button onPress={decreaseCounter} title="Decrease" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "red",
    fontSize: 20,
  },
});
