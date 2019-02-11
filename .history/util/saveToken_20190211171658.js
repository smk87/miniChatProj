import { AsyncStorage, Alert } from "react-native";

const saveToken = token => {
  AsyncStorage.setItem("token", token);

  console.log(token);
};

export default saveToken;
