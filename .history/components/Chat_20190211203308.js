import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import { Header } from "react-native-elements";

export default class chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null //Hide the header
  });

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: "Chat App", style: { color: "#fff" } }}
          rightComponent={{ icon: "logout", color: "#fff" }}
        />
        <Text>This is chat.</Text>
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
