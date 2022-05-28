import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import FlatListDemo from "./FlatListDemo";

const ImageFile = () => {
  const imagesList = [
    {
      name: "1",
    },
    {
      name: "2",
    },
    {
      name: "3",
    },
    {
      name: "4",
    },
    {
      name: "5",
    },
    {
      name: "6",
    },
    {
      name: "7",
    },
    {
      name: "8",
    },
    {
      name: "9",
    },
    {
      name: "10",
    },
  ];
  return (
    <View>
      <Text style={styles.textStyle}>Image File</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={imagesList}
        keyExtractor={(key) => {
          return key.name;
        }}
        renderItem={(element) => {
          return (
            <View style={styles.listStyle}>
              <Image
                style={styles.imageStyle}
                source={require(`../../assets/text${element.item.name}.jpg`)}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    alignItems: "center",
  },
  textStyle: {
    backgroundColor: "#000",
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    padding: 15,
    margin: 10,
    textAlign: "center",
    borderRadius: 4,
  },
  imageStyle: {
    width: 300,
    height: 300,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "black",
    // elevation: 5,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    shadowColor: "#202020",
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
});
export default ImageFile;
