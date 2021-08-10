import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ScreenB = ({ navigation, route }) => {
  const { itemName, itemId } = route.params;

  const [item, setItem] = useState({
    id: 12,
    name: "This is item from screen B",
  });

  const onPressHanlder = () => {
    navigation.navigate("ScreenA", {
      item: item,
      itemName: itemName,
      itemId: itemId,
    });
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Button title="Go to Screen A" onPress={onPressHanlder} />
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

export default ScreenB;
