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

import Login from "./components/Login";

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        style={{ width: null, height: 100 }}
        source={require("./img/bg.jpg")}
      >
        <Login />
        <Text>Hello World</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
