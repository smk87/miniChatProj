import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import LoginForm from "./Forms";

export default class Register extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  onPress = () => {
    console.log("Clicked!");
    this.props.navigation.push("Login");
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../img/chat2.png")} />
          <Text style={styles.title}> A Chat App </Text>
          <TouchableOpacity style={styles.clickhere}>
            <Text style={styles.clicktext}>Already Joined?</Text>
          </TouchableOpacity>
          <View style={styles.formcontainer}>
            <LoginForm onPress={this.onPress} msg="Join" />
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
  },
  clickhere: {
    alignSelf: "center",
    marginTop: 10
  },
  clicktext: {
    color: "#3498db"
  }
});
