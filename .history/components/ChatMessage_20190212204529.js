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
  FlatList,
  ScrollView
} from "react-native";
import { Input, Icon } from "react-native-elements";

export default class ChatMessage extends Component {
  constructor() {
    super();

    this.state = {
      texts: []
    };
    socket.on("new message", data => {
      // we tell the client to execute 'new message'

      socket.broadcast.emit("new message", {
        username: socket.username,
        message: data
      });
    });
  }
  componentWillMount() {
    socket.on("message", message => {
      // React will automatically rerender the component when a new message is added.
      this.setState({ texts: this.state.texts.concat(message) });
      console.log(this.state.texts.map(c => c.author.username));
    });
  }
  render() {
    const { socket } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text>This is a message</Text>
        {this.state.texts.map(item => (
          <View>
            <Text style={{ alignSelf: "center" }}>
              {item.author.username}: {item.body}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%"
  },
  icon: {
    marginLeft: -20,
    marginRight: 10
  }
});
