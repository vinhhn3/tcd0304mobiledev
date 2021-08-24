import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  const onPressHanlder = () => {
    navigation.navigate("ScreenA");
  };

  return (
    <View style={styles.body}>
      <Text>Welcome Home</Text>
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

export default Home;
