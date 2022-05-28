import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const FlatListDemo = () => {
  const names = [
    {
      index: "1",
      name: "Hafiz",
    },
    {
      index: "2",
      name: "Muhammad",
    },
    {
      index: "3",
      name: "Ali",
    },
    {
      index: "4",
      name: "Waheed",
    },
    {
      index: "5",
      name: "Iqbal",
    },
    {
      index: "6",
      name: "Hussain",
    },
    {
      index: "7",
      name: "Ghulam",
    },
  ];

  return (
    <FlatList
      style={styles.listStyle}
      horizontal
      inverted
      // numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(key) => {
        return key.index;
      }}
      data={names}
      renderItem={(element) => {
        console.log(element.item.name);
        return <Text style={styles.textStyle}>{element.item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listStyle: {
    margin: 20,
    textAlign: "center",
    padding: 15,
  },
  textStyle: {
    margin: 20,
    padding: 30,
    fontSize: 20,
    backgroundColor: "blue",
    color: "white",
  },
});

export default FlatListDemo;
