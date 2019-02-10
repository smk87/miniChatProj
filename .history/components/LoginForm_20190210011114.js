import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "#7f8c8d",
    marginBottom: 20,
    color: "white",
    paddingHorizontal: 10,
    borderRadius: 20
  },
  btn: {
    backgroundColor: "#27ae60"
  }
});
