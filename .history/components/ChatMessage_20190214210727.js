import React, { Component } from "react";
import Display from "react-native-display";
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
      whotyping: [],
      userleft: {},
      userjoined: {},
      delivered: false
    };

    this.props.socket.on("self update", message => {
      console.log("This is my msg.");
      const newText = {
        author: {
          username: message.username
        },
        body: message.message,
        seen: false
      };
      // we tell the client to execute 'self update'
      this.setState({
        texts: this.state.texts.concat(newText)
      });
    });

    this.props.socket.on("typing", data => {
      if (this.state.whotyping.indexOf(data.username) === -1) {
        this.setState({
          whotyping: this.state.whotyping.concat(data.username)
        });
      }
      console.log(this.state.whotyping);
    });

    this.props.socket.on("stop typing", data => {
      this.setState({
        whotyping: this.state.whotyping.filter(e => e !== data.username)
      });
      console.log(this.state.whotyping);
    });

    this.props.socket.on("seen", message => {
      if(this.props.texts.indexOf(message)){

        this.setState({
          this.props.texts[this.props.texts.indexOf(message)].seen = true;
})
      }
    });

    this.props.socket.on("new message", message => {
      const newText = {
        author: {
          username: message.username
        },
        body: message.message,
        seen: false
      };
      // we tell the client to execute 'new message'
      this.setState({ texts: this.state.texts.concat(newText) });
      this.props.socket.emit("seen", message);
    });

    this.props.socket.on("user left", data => {
      this.setState({ userleft: data });
      setTimeout(() => this.setState({ userleft: {} }), 2000);
    });

    this.props.socket.on("user joined", data => {
      this.setState({ userjoined: data });
      setTimeout(() => this.setState({ userjoined: {} }), 2000);
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
      <ScrollView
        style={styles.container}
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
        {this.state.texts.map(item => (
          <View>
            <View style={styles.name}>
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 23
                }}
              >
                {item.author.username}
              </Text>
            </View>
            <View style={styles.msg}>
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 20
                }}
              >
                {item.body} {this.state.delivered ? "Delivered" : ""}
              </Text>
            </View>
          </View>
        ))}
        <Display enable={this.state.userleft.username ? true : false}>
          <Text
            style={{
              alignSelf: "center",
              marginBottom: 10
            }}
          >
            {this.state.userleft.username}
            {this.state.userleft.username ? " has left." : ""}
            {this.state.userleft.numUsers}
            {this.state.userleft.numUsers ? " Online." : ""}
          </Text>
        </Display>
        <Display enable={this.state.userjoined.username ? true : false}>
          <Text
            style={{
              alignSelf: "center",
              marginBottom: 10
            }}
          >
            {this.state.userjoined.username}
            {this.state.userjoined.username ? " has joined." : ""}
            {this.state.userjoined.numUsers}
            {this.state.userjoined.numUsers ? " Online." : ""}
          </Text>
        </Display>
        <Display enable={this.state.whotyping ? true : false}>
          {this.state.whotyping.map(name => (
            <Text style={{ alignSelf: "center", marginBottom: 10 }}>
              {name}
              {this.state.whotyping ? " is Typing..." : ""}
            </Text>
          ))}
        </Display>
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
  },
  name: {
    width: "auto",
    marginBottom: 10,
    height: "auto",
    alignSelf: "center",
    borderRadius: 10
  }
});
