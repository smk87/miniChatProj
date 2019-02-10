import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class LoginForm extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e"
  }
});
