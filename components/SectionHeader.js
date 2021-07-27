import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SectionHeader() {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>Section Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "white",
  },
});
