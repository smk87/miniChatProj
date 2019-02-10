import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../img/logo.png")} />
          <Text style={styles.title}> A Chat App </Text>
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
  logocontainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  formcontainer: {},
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: "white",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9,
    size: 10
  }
});
