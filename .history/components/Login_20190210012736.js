import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView
} from "react-native";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../img/logo.png")} />
          <Text style={styles.title}> A Chat App </Text>
          <View style={styles.formcontainer}>
            <LoginForm />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e",
    padding: 500
  },
  logocontainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  formcontainer: {
    width: 300,
    height: 100,
    paddingTop: 50
  },
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
    fontSize: 20
  }
});
