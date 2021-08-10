import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ handlePress, text }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00ff00",
    width: 150,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});

export default CustomButton;
