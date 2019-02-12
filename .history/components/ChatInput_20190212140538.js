import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { Input } from "react-native-elements";
import { Icon } from "react-native-elements";

export default class chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Input placeholder="Write a message..." shake={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%"
  }
});
