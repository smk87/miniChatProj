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
        style={{ width: "100%", height: "100%" }}
        source={require("./img/bg.jpg")}
      >
        <View>
          <InputAuth style={styles.container} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 20
  }
});
