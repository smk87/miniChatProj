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
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default class LoginForm extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.input}>
          <Input placeholder="Username" returnKeyType="next" />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Password"
            returnKeyType="go"
            secureTextEntry
            inputStyle={styles.inp}
          />
        </View>
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
  inp: {},
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
