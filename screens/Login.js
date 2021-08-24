import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

const Login = ({ navigation }) => {
  const [name, setName] = useState("");

  const onPressHanlder = async () => {
    if (name.length === 0) {
      Alert.alert("Warning !. Please enter your name !!!");
    } else {
      try {
        await AsyncStorage.setItem("Username", name);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(value) => setName(value)}
      />
      <CustomButton title="Login" handlePress={onPressHanlder} />
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
