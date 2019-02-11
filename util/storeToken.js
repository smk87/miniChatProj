import { AsyncStorage } from "react-native";

const storeToken = async token => {
  await AsyncStorage.setItem("token", token);
};

export default storeToken;
