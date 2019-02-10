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
          <Label>Username</Label>
          <Input />
          <Label>Username</Label>
          <Input />
        </Form>
      </Content>
    );
  }
}
