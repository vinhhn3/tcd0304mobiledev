import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // Properties
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Text Input and Keyboard</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder="Enter your name ..."
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setAddress(value)}
        placeholder={"Enter your address ..."}
      />
      <Text style={styles.text}>Your name is: {name}</Text>
      <Text style={styles.text}>Your Address is: {address}</Text>
    </View>
  );
}

//

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
