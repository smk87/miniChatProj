import React, { Component } from "react";
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
  render() {
    const { onSend } = this.props;
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
