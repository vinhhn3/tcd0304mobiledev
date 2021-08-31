import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserDetail = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.body}>
      <Text>{user.Name}</Text>
      <Text>{user.Age}</Text>
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
