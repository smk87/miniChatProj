import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  return AsyncStorage.getItem("token");
};

export default showToken;
