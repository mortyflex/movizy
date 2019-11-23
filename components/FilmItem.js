import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class FilmItem extends Component {
  render() {
    const { film } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: "image" }} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{film.title}</Text>
            <Text style={styles.vote}>{film.vote_average}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.description_text}>{film.overview}</Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    borderBottomColor: "#f0932b",
    borderBottomWidth: 3,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "#30336b",
    margin: 7,
    marginBottom: 9,
    height: "auto",
    flexDirection: "row"
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: "grey",
    borderRadius: 5
  },
  content: {
    flex: 1,
    margin: 5,
    flexDirection: "column"
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5
  },
  vote: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#777"
  },
  description: {
    flex: 7
  },
  description_text: {
    fontStyle: "italic",
    color: "#777"
  },
  header: {
    flex: 3,
    flexDirection: "row"
  },
  date: {
    flex: 1
  },
  date_text: {
    textAlign: "right",
    fontSize: 14
  }
});
