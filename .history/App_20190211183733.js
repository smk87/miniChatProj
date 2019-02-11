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

const storage = new Storage({
  // maximum capacity, default 1000
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: 1000 * 3600 * 24,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: Register
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

export default createAppContainer(AppStack);
