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
      <View>
        <InputAuth />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 20
  }
});
