import * as SQLite from "expo-sqlite";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";

const db = SQLite.openDatabase("dbName", 1.0);

const UserDetail = ({ route, navigation }) => {
  const { user } = route.params;

  const deleteUser = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM Users WHERE id = ?",
          [user.Id],
          (tx, result) => {
            Alert.alert("Deleted !!!");
            navigation.navigate("Users");
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text>{user.Id}</Text>
      <Text>{user.Name}</Text>
      <Text>{user.Age}</Text>
      <CustomButton title="Delete This User" handlePress={deleteUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserDetail;
