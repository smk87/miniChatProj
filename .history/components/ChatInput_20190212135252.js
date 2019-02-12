import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";

export default class chat extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e"
  },
  header: {
    height: 45,
    borderBottomWidth: 5,
    backgroundColor: "#2c3e50"
  },
  icon: {
    marginBottom: 30
  }
});
