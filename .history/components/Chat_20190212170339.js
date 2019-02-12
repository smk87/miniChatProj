import React, { Component } from "react";
window.navigator.userAgent = "react-native";
import SocketIOClient from "socket.io-client";
import axios from "axios";
import jwt_decode from "jwt-decode";
import loadToken from "../util/loadToken";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { Header, Icon } from "react-native-elements";

import loadToken from "../util/loadToken";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

//Ignore warning
console.ignoredYellowBox = ["Remote debugger"];
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?"
]);

export default class chat extends Component {
  constructor() {
    super();

    this.state = {
      send: ""
    };

    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient("http://192.168.0.105:3000", { jsonp: false });
  }

  static navigationOptions = ({ navigation }) => ({
    header: null //Hide the header
  });

  //After pressing the send icon
  onSend = () => {
    console.log("Sent.");
  };
  //Getting send field input
  onSendText = e => {
    this.setState({ send: e });
    console.log(this.state.send);
    this.socket.emit("add user", "reactnative");
  };

  componentWillMount() {
    token = loadToken().then();
    //Decode token to get user data
    const decoded = jwt_decode(token);
    //Set current user
    this.socket.emit("add user", "reactnative");
  }

  //Logging out and removing token from system
  logout = () => {
    console.log("Logged Out.");
    loadToken().then(res => console.log(res));

    AsyncStorage.removeItem("token")
      .then(() => loadToken())
      .then(res => console.log(res));

    loadToken().then(res => {
      if (!res) {
        console.log("Not Logged In.");
        this.props.navigation.push("Login");
      } else {
        console.log("Already Logged In.");
        this.props.navigation.push("Chat");
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={styles.header}
          centerComponent={{
            text: "Chat App",
            style: { marginBottom: 30, fontSize: 20, color: "#fff" }
          }}
          rightComponent={
            <Icon
              iconStyle={styles.icon}
              name="logout"
              type="antdesign"
              color="white"
              onPress={this.logout}
            />
          }
        />
        <Text>This is chat.</Text>
        <TouchableOpacity onPress={this.test}>
          <Text>Click To Test API</Text>
        </TouchableOpacity>

        <View>
          <ChatMessage />
        </View>

        <View style={styles.chatinp}>
          <ChatInput onSend={this.onSend} onSendText={this.onSendText} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e"
  },
  header: {
    height: 45,
    borderBottomWidth: 5,
    backgroundColor: "#2c3e50"
  },
  icon: {
    marginBottom: 30
  },
  chatinp: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  }
});
