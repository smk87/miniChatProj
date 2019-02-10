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
      <View>
        <CusHead />
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "top",
    alignItems: "center",
    backgroundColor: "white"
  }
});
