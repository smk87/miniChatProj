import React, { Component } from "react";
import { Container, Header, Content, Form, Item, Input } from "native-base";
export default class FormExample extends Component {
  render() {
    return (
      <Container>
        <Input placeholder="Enter Username" />
      </Container>
    );
  }
}
