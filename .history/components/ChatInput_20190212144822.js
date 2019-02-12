import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  AsyncStorage,
  TouchableOpacity,
  List,
  FlatList
} from "react-native";
import { Input, Icon } from "react-native-elements";

export default class ChatInput extends Component {
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