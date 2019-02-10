import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Input } from "native-base";

export default class LoginForm extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput
          placeholder="Username"
          returnKeyType="next"
          style={styles.input}
        />
        <Input style={styles.inp} />
        <TextInput
          placeholder="Password"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text style={styles.btntext}>{this.props.msg}</Text>
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
    borderRadius: 20,
    fontSize: 17
  },
  inp: {
    height: 50,
    backgroundColor: "#7f8c8d",
    marginBottom: 20,
    color: "white",
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 17
  },
  btn: {
    backgroundColor: "#27ae60",
    paddingVertical: 15,
    borderRadius: 5,
    width: 120,
    alignSelf: "center"
  },
  btntext: {
    textAlign: "center",
    color: "white",
    fontWeight: "700"
  }
});
