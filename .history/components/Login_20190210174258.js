import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView
} from "react-native";
import Forms from "./Forms";

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  onPress = () => {
    axios
      .get("localhost:3000/")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../img/chat2.png")} />
          <Text style={styles.title}> A Chat App </Text>
          <View style={styles.formcontainer}>
            <Forms onPress={this.onPress} msg="Log In" />
          </View>
        </View>
      </KeyboardAvoidingView>
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
