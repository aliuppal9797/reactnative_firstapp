import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomComponent = () => {
  return <Text style={styles.textStyle}>This is my Custom Components! ☠️</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
  },
});

export default CustomComponent;
