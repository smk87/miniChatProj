import React, { Component } from "react";
import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";
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

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: Register
  },
  Login: { screen: Login },
  Chat: { screen: Chat }
});

class App extends Component {
  render() {
    return <AppStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(AppStack);
