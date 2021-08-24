import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

const db = SQLite.openDatabase("dbName", 1.0);

const Home = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Call only one time when the component is loaded
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      db.transaction((tx) => {
        console.log(123);
        tx.executeSql("SELECT Name, Age FROM Users;", [], (tx, result) => {
          console.log(JSON.stringify(result.rows));
          var len = result.rows.length;
          console.log(len);
          if (len > 0) {
            const userName = result.rows.item(0).Name;
            const userAge = result.rows.item(0).Age;
            setName(userName);
            setAge(userAge);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("Username");
      Alert.alert("Removed !!!. Your name is removed !!!");
      setName("");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length === 0) {
      Alert.alert("Please enter your name");
    } else {
      await AsyncStorage.setItem("Username", name);
      Alert.alert("Your name is updated !!!");
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome {name}</Text>
      <Text style={styles.text}>Your Age: {age}</Text>

      <CustomButton title="Logout" handlePress={logout} />
      <View style={styles.updateInput}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(value) => setName(value)}
        />
        <CustomButton title="Update" handlePress={updateData} />
      </View>
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
    justifyContent: "center",
    textAlign: "center",
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
  updateInput: {
    alignItems: "center",
  },
});

export default Home;
