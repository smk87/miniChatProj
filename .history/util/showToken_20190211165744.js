import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  const value = AsyncStorage.getItem("token");
  console.log("hello");
};

export default showToken;
