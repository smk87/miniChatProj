import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  return AsyncStorage.getItem("token").then(value => value);
};

export default showToken;
