import React, { PureComponent } from "react";
import { Button, StyleSheet, View, TextInput, FlatList } from "react-native";

import FilmItem from "./FilmItem";
import { getFilmsFromApi } from "../API/tmdbAPI";

export default class Search extends PureComponent {
  state = {
    films: [],
    isLoading: false,
    searchText: ""
  };

  loadFilms = async () => {
    const { searchText } = this.state;
    this.setState({ isLoading: true });
    const films = await getFilmsFromApi(searchText);

    this.setState({ films, isLoading: false });
  };

  onChangeText = searchText => {
    this.setState({ searchText });
  };

  render() {
    const { films, isLoading } = this.state;
    return (
      <View style={styles.Container}>
        <TextInput
          onChangeText={e => this.onChangeText(e)}
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          style={styles.TextInput}
          placeholder="title..."
        />
        <Button
          color="#f0932b"
          title={isLoading ? "loading..." : "Search"}
          onPress={() => this.loadFilms()}
        />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={films}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 70,
    backgroundColor: "#dff9fb",
    flex: 1
  },
  TextInput: {
    backgroundColor: "#30336b",
    color: "#FFF",
    borderRadius: 7,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#f0932b",
    borderWidth: 2,
    paddingLeft: 5,
    fontSize: 27,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  }
});
