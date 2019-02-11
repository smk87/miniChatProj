import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import Forms from "./Forms";
import { Overlay } from "react-native-elements";

import loadToken from "../util/loadToken";
import saveAuthToken from "../util/saveAuthToken";

export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      errors: {},
      username: "",
      password: ""
    };
  }

  static navigationOptions = ({ navigation }) => ({
    header: null //Hide the header
  });

  //Get input from iput fields
  onGetUsername = e => {
    this.setState({
      username: e
    });
  };
  onGetPassword = e => {
    this.setState({
      password: e
    });
  };

  //After pressing Join button
  onPress = () => {
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://192.168.0.105:3000/api/user/register", newUser)
      .then(res => {
        console.log(res.data);
        this.props.navigation.push("Login", {
          success: "You Have Joined. You Can Login To Chat Now."
        });
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({ errors: err.response.data });
      });
  };

  //After prressing Already Joined?
  onPressLogin = () => {
    this.props.navigation.push("Login");
  };

  render() {
    loadToken().then(res => {
      if (!res) {
        console.log("Not Logged In.");
        this.props.navigation.push("Register");
      } else {
        console.log("Already Logged In.");
        this.props.navigation.push("Chat");
      }
    });

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../img/chat2.png")} />
          <Text style={styles.title}> A Chat App </Text>
          <TouchableOpacity
            onPress={this.onPressLogin}
            style={styles.clickhere}
          >
            <Text style={styles.clicktext}>Already Joined?</Text>
          </TouchableOpacity>
          <View style={styles.formcontainer}>
            <Forms
              errors={this.state.errors}
              onGetUsername={this.onGetUsername}
              onGetPassword={this.onGetPassword}
              onPress={this.onPress}
              msg="Join"
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
    height: 300,
    paddingTop: 50,
    marginBottom: 20
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
  },
  clickhere: {
    alignSelf: "center",
    marginTop: 10
  },
  clicktext: {
    color: "#3498db"
  }
});
