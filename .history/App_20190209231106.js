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
        style={{ width: null, height: 800 }}
        source={require("./img/bg.jpg")}
      >
        <InputAuth style={styles.first} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  first: {}
});
