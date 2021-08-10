import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ScreenB({ navigation }) {
  const onPressHanlder = () => {
    navigation.navigate("ScreenA");
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Button title="Go to Screen B" onPress={onPressHanlder} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});
