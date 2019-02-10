import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from "react-native";
import {
  createStackNavigator,
  createNavigationContainer
} from "react-navigation";

import Login from "./components/Login";
import Register from "./components/Register";

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: "Register",
      header: null
    })
  },
  Login: { screen: Login }
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

export default createNavigationContainer(AppStack);
