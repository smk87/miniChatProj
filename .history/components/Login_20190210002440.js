import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <div style={styles.container}>
        <View style={styles.logocontainer}>
          <Image source={require("../img/logo.gif")} />
          <View style={styles.formcontainer} />
        </View>
      </div>
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
