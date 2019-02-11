import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  const value = AsyncStorage.getItem("token").then(value => console.log(value));
};

export default showToken;
