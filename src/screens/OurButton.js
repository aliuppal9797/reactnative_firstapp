import {
  Button,
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const OurButton = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Button Practice</Text>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Subscription Button Pressed");
          console.log(`subscribe to Ali Uppal Youtube Channel.`);
        }}
      >
        <View style={styles.imageCenterStyle}>
          <Image
            style={styles.imgStyle}
            source={require("../assets/text1.jpg")}
          />
          <Text style={styles.buttonTextStyle}>
            Na Mila Kro, Na Gila Kro..!👌
          </Text>
        </View>
      </TouchableOpacity>
      {/* <Button
        title="Na Mila Kro, Na Gila Kro..!👌"
        onPress={() => {
          // console.log(`subscribe to Ali Uppal Youtube Channel.`)
          Alert.alert("Subscription Button Pressed");
        }}
        disabled
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    padding: 40,
    textAlign: "center",
    color: "white",
    backgroundColor: "red",
    fontSize: 30,
    fontWeight: "bold",
  },
  imageCenterStyle: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  imgStyle: {
    width: 300,
    height: 300,
    textAlign: "center",
  },
  buttonTextStyle: {
    backgroundColor: "green",
    padding: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    width: 300,
    textAlign: "center",
    justifyContent: "center",
  },
  // buttonStyle: {
  //   padding: 30,
  //   margin: 30,
  //   fontSize: 40,
  //   alignItems: "center",
  // },
});

export default OurButton;
