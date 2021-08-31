import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Users = () => {
  return (
    <View style={styles.body}>
      <Text>Show all Users</Text>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
