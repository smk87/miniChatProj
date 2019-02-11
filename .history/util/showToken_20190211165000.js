import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  AsyncStorage.getItem("token").then(value => {
    console.log(value);
  });
};

export default showToken;
