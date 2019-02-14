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
      typing: false,
      whotyping: "",
      userleft: {
        user: "",
        left: ""
      }
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

    this.props.socket.on("typing", data => {
      this.setState({ typing: true, whotyping: data.username });
    });
    this.props.socket.on("stop typing", () => {
      this.setState({ typing: false, whotyping: "" });
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

    this.props.socket.on("user left", data => {});
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
      <ScrollView
        style={styles.container}
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
        {this.state.texts.map(item => (
          <View style={styles.msg}>
            <Text
              style={{ alignSelf: "flex-start", color: "white", fontSize: 20 }}
            >
              {item.author.username}: {item.body}
            </Text>
          </View>
        ))}
        <Text style={{ alignSelf: "center", marginBottom: 10 }}>
          {this.state.whotyping}
          {this.state.typing ? " is Typing..." : ""}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  icon: {
    marginLeft: -20,
    marginRight: 10
  },
  msg: {
    width: "85%",
    backgroundColor: "#7f8c8d",
    marginBottom: 10,
    height: "auto",
    alignSelf: "center",
    borderRadius: 10
  }
});
