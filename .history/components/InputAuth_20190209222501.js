import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
export default class FormExample extends Component {
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
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  InputStyleClass: {
    // Setting up Hint Align center.
    textAlign: "center",

    // Setting up TextInput height as 50 pixel.
    height: 45,

    width: 2,

    // Set border width.
    borderWidth: 1,

    // Set border Hex Color Code Here.
    borderColor: "blue",

    // Set border Radius.
    borderRadius: 15,

    //Set background color of Text Input.
    backgroundColor: "#FFFFFF"
  }
});
