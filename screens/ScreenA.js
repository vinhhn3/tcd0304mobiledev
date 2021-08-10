import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ScreenA = ({ navigation, route }) => {
  const { item } = route.params;
  const { itemName, itemId } = route.params;

  const onPressHanlder = () => {
    navigation.navigate("ScreenB");
  };

  return (
    <View style={styles.body}>
      <Ionicons name="md-person" size={30} color="black" />
      <Text style={styles.text}>Screen A</Text>
      <Button title="Go to Screen B" onPress={onPressHanlder} />
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <Text>{itemName}</Text>
      <Text>{itemId}</Text>
    </View>
  );
};

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

export default ScreenA;
