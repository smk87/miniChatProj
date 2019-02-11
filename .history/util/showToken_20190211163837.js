import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  const value = AsyncStorage.getItem("token");
};

export default showToken;
