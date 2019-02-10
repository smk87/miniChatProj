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
      <Form>
        <Item floatingLabel>
          <Input
            placeholder="Enter Your Username"
            style={styles.InputStyleClass}
          />
        </Item>
        <Item floatingLabel last>
          <Input
            placeholder="Enter Your Password"
            style={styles.InputStyleClass}
          />
        </Item>
        <Button primary style={styles.btn}>
          <Text>Submit</Text>
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
