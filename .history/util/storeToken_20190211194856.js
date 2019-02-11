import { AsyncStorage } from "react-native";

const storeToken = async token => {
  await AsyncStorage.setItem("token", "hhhhhh");
};

export default storeToken;
