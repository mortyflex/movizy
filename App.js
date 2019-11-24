import React, { Component } from "react";
import * as Font from "expo-font";

import Search from "./components/Search";

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Calistoga: require("./assets/fonts/Calistoga-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return fontLoaded ? <Search /> : null;
  }
}
