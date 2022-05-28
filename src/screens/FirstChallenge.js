import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FirstChallenge = () => {
  const myName = "ali uppal";

  return (
    <View>
      <Text style={styles.welcomeStyle}>
        Welcome to Ali Uppal Youtube Channel..🔥
      </Text>
      <Text style={styles.subscriberStyle}>
        We Love React Native and I'm a Subscriber of Ali Uppal.
      </Text>
      <Text>Hi! My name is {myName}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeStyle: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold"
  },
  subscriberStyle: {
    fontSize: 25,
  },
});

export default FirstChallenge;
