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
  constructor() {
    super();

    this.state = {
      errors: {},
      username: "",
      password: ""
    };
  }

  static navigationOptions = ({ navigation }) => ({
    header: null,
    success: navigation.state.params.success
  });

  onGetUsername = e => {
    this.setState({
      username: e
    });
    console.log(this.state.username);
  };

  onGetPassword = e => {
    this.setState({
      password: e
    });
    console.log(this.state.password);
  };

  onPress = () => {
    axios
      .get("http://192.168.0.105:3000/api/user/test")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text>{navigationOptions.success}</Text>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../img/chat2.png")} />
          <Text style={styles.title}> A Chat App </Text>
          <View style={styles.formcontainer}>
            <Forms
              errors={this.state.errors}
              onGetUsername={this.onGetUsername}
              onGetPassword={this.onGetPassword}
              onPress={this.onPress}
              msg="Log In"
            />
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
