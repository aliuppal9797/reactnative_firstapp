import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Card } from "react-native-shadow-cards";

const ChallengeFlatList = () => {
  const movies = [
    {
      index: "1",
      name: "Archive 81",
      year: "2022",
      creator: "Rebecca Sonnenshine",
      genre: "Horror Thriller",
    },
    {
      index: "2",
      name: "Cheer",
      year: "2021 - 2022",
      creator: "Greg Whiteley",
      genre: "Docuseries",
    },
    {
      index: "3",
      name: "Cobra Kai",
      year: "2018 - 2022",
      creator: "Hayden Schlossberg",
      genre: "Drama",
    },
    {
      index: "4",
      name: "The Witcher",
      year: "2020 - 2021",
      creator: "Lauren Schmidt Hissrich",
      genre: "Reality",
    },
    {
      index: "5",
      name: "Emily in Paris",
      year: "2020",
      creator: "Darren Star",
      genre: "Romance, Drama",
    },
    {
      index: "6",
      name: "Death Note",
      year: "2021",
      creator: "unknown",
      genre: "Horror Thriller",
    },
    {
      index: "7",
      name: "Archive 81",
      year: "2022",
      creator: "Rebecca Sonnenshine",
      genre: "Horror Thriller",
    },
    {
      index: "8",
      name: "Cheer",
      year: "2021 - 2022",
      creator: "Greg Whiteley",
      genre: "Docuseries",
    },
    {
      index: "9",
      name: "Cobra Kai",
      year: "2018 - 2022",
      creator: "Hayden Schlossberg",
      genre: "Drama",
    },
    {
      index: "10",
      name: "The Witcher",
      year: "2020 - 2021",
      creator: "Lauren Schmidt Hissrich",
      genre: "Reality",
    },
  ];
  return (
    <View>
      <Text style={styles.headingStyle}>List of Top 10 NetFlix Series</Text>
      <FlatList
        style={[styles.horizontalListStyle, styles.borderBottomStyle]}
        horizontal
        keyExtractor={(key) => {
          return key.index;
        }}
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={(element) => {
          return (
            <View style={styles.cardStyle}>
              <Text style={styles.movieNameStyle}>{element.item.name}</Text>
              <Text style={styles.movieCreatorStyle}>
                {element.item.creator}
              </Text>
              <Text style={styles.movieYearStyle}>{element.item.year}</Text>
              <Text style={styles.movieGenreStyle}>{element.item.genre}</Text>
            </View>
          );
        }}
      />
      <FlatList
        style={styles.verticalListStyle}
        keyExtractor={(key) => {
          return key.index;
        }}
        showsVerticalScrollIndicator={false}
        data={movies}
        renderItem={(element) => {
          return (
            <View style={styles.cardStyle}>
              <Text style={styles.movieNameStyle}>
                Name: {element.item.name}
              </Text>
              <Text style={styles.movieCreatorStyle}>
                Creator: {element.item.creator}
              </Text>
              <Text style={styles.movieYearStyle}>
                Year: {element.item.year}
              </Text>
              <Text style={styles.movieGenreStyle}>
                Genre: {element.item.genre}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle:{
    padding: 10,
    paddingLeft:20,
    fontSize: 25,
    fontWeight:"bold",
    color: "red",
    backgroundColor:"#000",
  },
  borderBottomStyle: {
    borderBottomColor: "#00b9c1",
    borderBottomWidth: 2,
  },
  horizontalListStyle: {
    padding: 10,
    borderBottomColor: "red",
  },
  verticalListStyle: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
  },
  cardStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: "#e0f2f1",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#00959b",
    elevation: 200,
  },
  movieNameStyle: {
    fontSize: 35,
    fontWeight: 450,
    color: "#00acc1",
    fontFamily: "Arial",
  },
  movieYearStyle: {
    color: "#12a3a9",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  movieCreatorStyle: {
    color: "rgb(101 101 101)",
    fontWeight: "bold",
  },
  movieGenreStyle: {
    color: "black",
  },
});
export default ChallengeFlatList;
