import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SectionItem = () => {
  return (
    <View style={styles.childItem}>
      <Text style={styles.text}>Child Item</Text>
    </View>
  );
};

export default SectionItem;

const styles = StyleSheet.create({
  childItem: {
    backgroundColor: "red",
    margin: 10,
  },

  text: {
    fontSize: 20,
    color: "white",
  },
});
