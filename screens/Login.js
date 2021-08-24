import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

const Login = ({ navigation }) => {
  const onPressHanlder = () => {
    navigation.navigate("ScreenB");
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Login Screen</Text>
      <TextInput style={styles.input} />
      <CustomButton title="Login" />
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
    margin: 15,
  },
  input: {
    borderWidth: 1,
    height: 50,
    width: 300,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 15,
    marginTop: 15,
  },
});

export default Login;
