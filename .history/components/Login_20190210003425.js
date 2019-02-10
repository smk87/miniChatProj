import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../img/logo.gif")} />
          <Text> Set Username and Password to Start Chatting in the room</Text>
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
  }
});
