import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SectionHeader() {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>React Native Couse - TCD0301</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "black",
    fontWeight: "bold",
  },
});
