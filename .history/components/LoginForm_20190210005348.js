import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {}
});
