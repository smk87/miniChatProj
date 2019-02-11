import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";

import loadToken from "../util/loadToken";
import removeToken from "../util/removeToken";

export default class chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null //Hide the header
  });

  logout = () => {
    console.log("Logged Out.");
    loadToken().then(res => console.log(res));

    AsyncStorage.removeItem("token").then(() => console.log());
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
    height: 45
  },
  icon: {
    marginBottom: 30
  }
});
