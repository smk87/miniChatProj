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
  container: {},
  input: {
    textAlign: "center",

    // Setting up TextInput height as 50 pixel.
    height: 45,

    width: 2,

    // Set border width.
    borderWidth: 1,

    // Set border Hex Color Code Here.
    borderColor: "blue",

    // Set border Radius.
    borderRadius: 20,

    //Set background color of Text Input.
    backgroundColor: "#FFFFFF"
  }
});
