import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Properties
  const [items, setItems] = useState([
    { key: 1, title: "title 1" },
    { key: 2, title: "title 2" },
    { key: 3, title: "title 3" },
    { key: 4, title: "title 4" },
    { key: 5, title: "title 5" },
    { key: 6, title: "title 6" },
    { key: 7, title: "title 7" },
    { key: 8, title: "title 8" },
  ]);

  return (
    <View style={styles.container}>
      {items.map((item) => {
        return (
          <View style={styles.item} key={item.key}>
            <Text style={styles.text}>Title: {item.title}</Text>
          </View>
        );
      })}
    </View>
  );
}

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column-reverse",
    // flexDirection: "row",
    // flexDirection: "row-reverse",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    margin: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    textTransform: "uppercase",
  },
});
