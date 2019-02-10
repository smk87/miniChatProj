/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from "react-native";

import InputAuth from "./components/InputAuth";

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.backgroundContainer}
        source={require("./img/bg.jpg")}
      >
        <InputAuth />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: 100,
    height: 800,
    flexdirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
