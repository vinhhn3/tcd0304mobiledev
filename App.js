import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // Properties
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const clearInput = () => {
    setSubmitted(false);
    setName("");
    setAddress("");
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Text Input and Keyboard</Text>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder="Enter your name ..."
      />
      <TextInput
        value={address}
        style={styles.input}
        onChangeText={(value) => setAddress(value)}
        placeholder={"Enter your address ..."}
      />
      <Button // Component button
        title="Submit"
        onPress={() => setSubmitted(true)}
      />

      {submitted ? (
        <View>
          <Button // Component button
            title="Clear"
            onPress={clearInput}
          />
          <Text style={styles.text}>Your name is: {name}</Text>
          <Text style={styles.text}>Your Address is: {address}</Text>
        </View>
      ) : (
        <Text>Nothing to show</Text>
      )}
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
