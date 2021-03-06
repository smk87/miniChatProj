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

import CusHead from "./components/CusHead";

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./img/bg.jpg")}
        style={styles.backgroundContainer}
      >
        <Text>Hello World</Text>
        <CusHead />
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
