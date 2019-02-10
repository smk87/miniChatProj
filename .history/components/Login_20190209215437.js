import React, { Component } from "react";
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
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
      </Content>
    );
  }


    const styles = StyleSheet.create({

        MainContainer: {

            // Setting up View inside content in Vertically center.
            justifyContent: 'center',
            flex: 1,
            margin: 10

        },

        InputStyleClass: {

            // Setting up Hint Align center.
            textAlign: 'center',

            // Setting up TextInput height as 50 pixel.
            height: 50,

            // Set border width.
            borderWidth: 2,

            // Set border Hex Color Code Here.
            borderColor: '#FF5722',

            // Set border Radius.
            borderRadius: 20,

            //Set background color of Text Input.
            backgroundColor: "#FFFFFF"

        }

    });
}

