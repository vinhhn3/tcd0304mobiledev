import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Properties
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("This is my Name");

  // Function
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  // main() function
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.view1}>View 1</Text>
      </View>
      <View>
        <Text style={styles.view2}>View 2</Text>
      </View>
      <View>
        <Text style={styles.view3}>View 3</Text>
      </View>
    </View>
  );
}

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column-reverse",
    // flexDirection: "row",
    flexDirection: "row-reverse",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    // flex: 1,
    height: 100,
    width: 100,
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    // flex: 1,
    height: 100,
    width: 100,
    backgroundColor: "#0000ff",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    // flex: 1,
    height: 100,
    width: 100,
    backgroundColor: "#00ff00",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "red",
    fontSize: 20,
  },
});
