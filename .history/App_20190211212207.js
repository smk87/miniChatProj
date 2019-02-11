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

const AppStack = createStackNavigator({
  Chat: { screen: Chat },
  HomeScreen: {
    screen: Register
  },
  Login: { screen: Login }
});

class App extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null //Hide the header
  });


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
