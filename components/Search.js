import React, { PureComponent } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  Text
} from "react-native";

import FilmItem from "./FilmItem";
import { getFilmsFromApi } from "../API/tmdbAPI";

export default class Search extends PureComponent {
  state = {
    films: [],
    isLoading: false,
    searchText: "",
    page: 0,
    totalPages: 0
  };

  loadFilms = async () => {
    const { searchText, page, films } = this.state;
    this.setState({ isLoading: true });
    const getFilms = await getFilmsFromApi(searchText, page + 1);

    this.setState({
      page: getFilms.page,
      totalPages: getFilms.total_pages,
      films: [...films, ...getFilms.results],
      isLoading: false
    });
  };

  onChangeText = searchText => {
    this.setState({ searchText, films: [], page: 0, totalPages: 0 });
  };

  onEndReached = () => {
    this.loadFilms();
  };

  render() {
    const { films, isLoading } = this.state;
    return (
      <View style={styles.Container}>
        <Text
          style={{
            fontFamily: "Calistoga",
            fontSize: 55,
            textAlign: "center",
            margin: 10,
            fontWeight: "700"
          }}
        >
          MovizY
        </Text>
        <TextInput
          onSubmitEditing={() => this.loadFilms()}
          onChangeText={e => this.onChangeText(e)}
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          style={styles.TextInput}
          placeholder="title..."
        />
        {isLoading ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5
            }}
          >
            <ActivityIndicator size="small" />
          </View>
        ) : (
          <Button
            color="#f0932b"
            title={isLoading ? "loading..." : "Search"}
            onPress={() => this.loadFilms()}
          />
        )}

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={films}
          renderItem={({ item }) => <FilmItem film={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={() => this.onEndReached()}
        />
        {isLoading && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5
            }}
          >
            <ActivityIndicator size="small" />
          </View>
        )}
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
