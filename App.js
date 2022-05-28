import React from "react";
import { Text, StyleSheet, View } from "react-native";
import OurButton from "./src/OurButton";
import ChallengeFlatList from "./src/screens/ChallengeFlatList";
import CustomComponent from "./src/screens/CustomComponent";
import FirstChallenge from "./src/screens/FirstChallenge";
import FlatListDemo from "./src/screens/FlatListDemo";
import ImageFile from "./src/screens/ImageFile";
const App = () => {
  const myName = "ali uppal";
  const myElement = <Text>my name is {myName} </Text>;
  const getFullName = (firstName, middleName, lastName) => {
    return `My First Name is ${firstName}, my middle name is ${middleName}, and my final name is ${lastName}`;
  };

  return (
    <View style={styles.textStyle}>
      {/* <FirstChallenge /> */}
      {/* <FlatListDemo /> */}
      {/* <ChallengeFlatList/> */}
      {/* <ImageFile /> */}
      <OurButton />

      {/* <Text>This is my App.js Component!! 😊 </Text>
      <Text>Hello {myName} </Text>
      {myElement}
      <Text>Hi!  {getFullName("Hafiz", "Muhammad", "Ali")}</Text>
      <CustomComponent /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    // marginTop: 100,
  },
  welcomeStyle: {
    color: "blue",
    fontSize: 40,
  },
  subscriberStyle: {
    fontSize: 25,
  },
});

export default App;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Gas Le Lo!! Gas Le Lo!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
