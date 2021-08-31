import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

const db = SQLite.openDatabase("dbName", 1.0);

const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    createTable();
    checkLogin();
  }, []);

  const checkLogin = () => {
    /* AsyncStorage */
    // try {
    //   const value = await AsyncStorage.getItem("Username");
    //   if (value !== null) {
    //     navigation.navigate("Home");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    /* SQLite */
    try {
      db.transaction((tx) => {
        tx.executeSql("SELECT Name, Age FROM Users", [], (tx, result) => {
          var len = result.rows.length;
          if (len > 0) {
            navigation.navigate("Home");
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const login = () => {
    if (name.length === 0 || age.length === 0) {
      Alert.alert("Warning !!!. Please enter your name and age !!!");
    } else {
      try {
        db.transaction((tx) => {
          tx.executeSql(
            "INSERT INTO Users (Name, Age) VALUES (?,?);",
            [name, age],
            (tx, results) => {
              console.log(results.rowsAffected);
            }
          );
        });
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Users(Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
      );
    });
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(value) => setName(value)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={(value) => setAge(value)}
        value={age}
      />
      <CustomButton title="Login" handlePress={login} />
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
