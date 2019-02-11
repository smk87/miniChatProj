import { AsyncStorage, Alert } from "react-native";

showToken = () => {
  return AsyncStorage.getItem("token").then(value => {
    if (value) {
      console.log(value);
      return value;
    }
  });
};

export default showToken;
