import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./components/Login";
import Register from "./components/Register";

const NavigationApp = StackNavigator({
  Home: Register,
  Login: Login
});

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
