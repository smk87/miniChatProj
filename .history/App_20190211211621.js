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
import Chat from "./components/Chat";

import loadToken from "./util/loadToken";

loadToken().then(res => {
  if (!res) {
    console.log("Not Logged In.");
    this.props.navigation.push("Login");
  } else {
    console.log("Already Logged In.");
  }
});

const AppStack = createStackNavigator({
  Chat: { screen: Chat },
  HomeScreen: {
    screen: Register
  },
  Login: { screen: Login }
});

class App extends Component {
  loadToken().then(res => {
    if (!res) {
  console.log("Not Logged In.");
  this.props.navigation.push("Login");
} else {
  console.log("Already Logged In.");
}
});
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
