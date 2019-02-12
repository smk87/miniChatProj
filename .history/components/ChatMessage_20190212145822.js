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

export default class ChatMessage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
        <List>
          <FlatList
            data={[{ key: "a" }, { key: "b" }]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </List>
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
