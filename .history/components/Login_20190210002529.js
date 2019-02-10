import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image source={require("../img/logo.gif")} />
          <View style={styles.formcontainer} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e"
  },
  logocontainer: {},
  formcontainer: {}
});
