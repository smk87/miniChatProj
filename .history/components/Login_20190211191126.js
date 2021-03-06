import React, { Component } from "react";
import Storage from "react-native-storage";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import Forms from "./Forms";
import saveAuthToken from "../util/saveAuthToken";
import saveToken from "../util/saveToken";
import showToken from "../util/showToken";

export const storage = new Storage({
  // maximum capacity, default 1000
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: 1000 * 3600 * 24,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});

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
    header: null //Hide the header
  });

  //Get input from input fields
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

  //After pressing Log In button
  onPress = () => {
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://192.168.0.105:3000/api/user/login", newUser)
      .then(res => {
        console.log(res.data);
        const { token } = res.data;

        //Set token to auth/axios header
        saveAuthToken(token);

        //Save token to storage
        saveToken();
        //Load token from storage
        showToken();
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({ errors: err.response.data });
      });
  };

  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../img/chat2.png")} />
          <Text style={styles.title}> A Chat App </Text>
          <View style={styles.formcontainer}>
            <Text style={styles.successtext} h1>
              {navigation.getParam("success", "")}
            </Text>
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
  },
  successtext: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center"
  }
});
