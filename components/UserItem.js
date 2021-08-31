import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UserItem = ({ user, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("UserDetail", { user })}
    >
      <View style={{ width: "90%" }}>
        <Text style={styles.id}>{user.Id}</Text>
        <Text style={styles.text}>{user.Name}</Text>
        <Text style={styles.text}>{user.Age}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: "2%",
    backgroundColor: "#eee",
    borderRadius: 5,
    marginBottom: "5%",
  },
  id: {
    flexWrap: "wrap",
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
  },
});
