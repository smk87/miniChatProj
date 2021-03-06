import React, { Component } from "react";
import SocketIOClient from "socket.io-client";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { Input, Icon } from "react-native-elements";

export default class ChatInput extends Component {
  constructor() {
    super();

    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient("http://localhost:3000");
  }

  onSend = () => {
    console.log("Sent.");
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Write a message..."
          leftIcon={
            <Icon
              name="wechat"
              type="antdesign"
              iconStyle={styles.icon}
              color="#517fa4"
            />
          }
          rightIcon={
            <Icon
              onPress={this.onSend}
              name="arrowright"
              type="antdesign"
              color="#517fa4"
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "99%",
    borderRadius: 10
  },
  icon: {
    marginLeft: -20,
    marginRight: 10
  }
});
