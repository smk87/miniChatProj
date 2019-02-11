import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  return AsyncStorage.getItem("token").then(value => {
    //console.log(value);
    return value;
  });
};

export default showToken;
