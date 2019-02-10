import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "white",
    marginBottom: 20
  }
});
