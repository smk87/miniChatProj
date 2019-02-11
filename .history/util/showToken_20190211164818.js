import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  let token = "";
  AsyncStorage.getItem("token").then(value => {
    token = value;
  });

  console.log("helo");
};

export default showToken;
