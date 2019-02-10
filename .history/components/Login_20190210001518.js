import React, { Component } from 'react'
import {StyleSheet,View,Image} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <div style={st}>
        
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  a: {
    width: "100%",
    height: 500,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  }
});
