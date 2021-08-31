import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import UserItem from "../components/UserItem";

const db = SQLite.openDatabase("dbName", 1.0);

const Users = ({ navigation }) => {
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

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM Users", [], (tx, result) => {
          var len = result.rows.length;
          console.log(JSON.stringify(result.rows));
          for (let i = 0; i < len; i++) {
            let row = result.rows.item(i);
            setData((prevState) => [
              ...prevState,
              { Id: row.Id, Name: row.Name, Age: row.Age },
            ]);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.Id)}
        renderItem={({ item }) => (
          <UserItem user={item} navigation={navigation} />
        )}
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
