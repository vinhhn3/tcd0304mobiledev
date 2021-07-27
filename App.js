import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
    { key: 9, title: "title 9" },
    { key: 10, title: "title 10" },
    { key: 11, title: "title 11" },
    { key: 12, title: "title 12" },
    { key: 13, title: "title 13" },
    { key: 14, title: "title 14" },
    { key: 15, title: "title 15" },
    { key: 16, title: "title 16" },
    { key: 17, title: "title 17" },
    { key: 18, title: "title 18" },
    { key: 19, title: "title 19" },
  ]);

  return (
    <ScrollView style={styles.container}>
      {items.map((item) => {
        return (
          <View style={styles.item} key={item.key}>
            <Text style={styles.text}>Title: {item.title}</Text>
          </View>
        );
      })}
    </ScrollView>
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
    // alignItems: "center",
    // justifyContent: "center",
  },
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
