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
  constructor(props) {
    super(props);

    this.state = {
      texts: [],
      typing: false
    };

    this.props.socket.on("self update", message => {
      console.log("This is my msg.");
      const newText = {
        author: {
          username: message.username
        },
        body: message.message
      };
      // we tell the client to execute 'self update'
      this.setState({ texts: this.state.texts.concat(newText) });
    });

    socket.on("typing", () => {
      this.setState({ typing: true });
    });

    socket.on("stop typing", () => {
      socket.broadcast.emit("stop typing", {
        username: socket.username
      });
    });

    this.props.socket.on("new message", message => {
      const newText = {
        author: {
          username: message.username
        },
        body: message.message
      };
      // we tell the client to execute 'new message'
      this.setState({ texts: this.state.texts.concat(newText) });
    });
  }
  componentWillMount() {
    this.props.socket.on("message", message => {
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
