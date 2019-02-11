import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  const value = AsyncStorage.getItem("token");
  console.log(value);
};

export default showToken;
