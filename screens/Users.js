import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import UserItem from "../components/UserItem";

const db = SQLite.openDatabase("dbName", 1.0);

const Users = () => {
  const [users, setUsers] = useState([
    {
      Id: 1,
      Name: "Vinh Hoang",
      Age: 30,
    },
    {
      Id: 2,
      Name: "Vinh Hoang",
      Age: 30,
    },
    {
      Id: 3,
      Name: "Vinh Hoang",
      Age: 30,
    },
    {
      Id: 4,
      Name: "Vinh Hoang",
      Age: 30,
    },
  ]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM Users", [], (tx, result) => {
          console.log(JSON.stringify(result.rows));
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.Id)}
        renderItem={({ item }) => <UserItem user={item} />}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
