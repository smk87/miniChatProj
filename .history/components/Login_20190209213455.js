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
    );
  }
}
