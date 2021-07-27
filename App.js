import React, { useState } from "react";
import { RefreshControl, SectionList, StyleSheet } from "react-native";
import SectionHeader from "./components/SectionHeader";
import SectionItem from "./components/SectionItem";

export default function App() {
  // Properties
  const [items, setItems] = useState([
    { key: 1, title: "title 1" },
    { key: 2, title: "title 2" },
    { key: 3, title: "title 3" },
    { key: 4, title: "title 4" },
    { key: 5, title: "title 5" },
    { key: 6, title: "title 6" },
    { key: 7, title: "title 7" },
    { key: 8, title: "title 8" },
    { key: 9, title: "title 9" },
    { key: 10, title: "title 10" },
    { key: 11, title: "title 11" },
    { key: 12, title: "title 12" },
    { key: 13, title: "title 13" },
    { key: 14, title: "title 14" },
    { key: 15, title: "title 15" },
    { key: 16, title: "title 16" },
    { key: 17, title: "title 17" },
    { key: 18, title: "title 18" },
    { key: 19, title: "title 19" },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const [DATA, setDATA] = useState([
    {
      title: "title-1",
      data: ["item 1-1", "item 1-2", "item 1-3"],
    },
    {
      title: "title-2",
      data: ["item 2-1", "item 2-2", "item 2-3"],
    },
    {
      title: "title-3",
      data: ["item 3-1", "item 3-2", "item 3-3"],
    },
    {
      title: "title-3",
      data: ["item 3-1", "item 3-2", "item 3-3"],
    },
    {
      title: "title-3",
      data: ["item 3-1", "item 3-2", "item 3-3"],
    },
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    setDATA([
      ...DATA,
      {
        title: "title 100",
        data: ["item 100-1", "item 100-2", "item 100-3"],
      },
      {
        title: "title 200",
        data: ["item 200-1", "item 200-2", "item 200-3"],
      },
      {
        title: "title 300",
        data: ["item 300-1", "item 300-2", "item 300-3"],
      },
    ]);
    setRefreshing(false);
  };

  return (
    <SectionList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
        // <View style={styles.childItem}>
        //   <Text style={styles.text}>{item}</Text>
        // </View>
        <SectionItem />
      )}
      renderSectionHeader={({ section }) => (
        // <View style={styles.item}>
        //   <Text style={styles.text}>{section.title}</Text>
        // </View>
        <SectionHeader />
      )}
    />
    // <ScrollView style={styles.container} horizontal={true}>
    // <ScrollView
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }
    //   style={styles.container}
    // >
    //   {items.map((item) => {
    //     return (
    //       <View style={styles.item} key={item.key}>
    //         <Text style={styles.text}>Title: {item.title}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
    // <FlatList
    //   // numColumns={4}
    //   // horizontal
    //   // inverted
    //   data={items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item} key={item.id}>
    //       <Text style={styles.text}>{item.title}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }
    // />
  );
}

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column-reverse",
    // flexDirection: "row",
    // flexDirection: "row-reverse",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    margin: 10,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  childItem: {
    backgroundColor: "red",
    margin: 10,
  },

  text: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "black",
  },
});
