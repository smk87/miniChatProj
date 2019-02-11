import { AsyncStorage } from "react-native";

const storeToken = async () => {
  await AsyncStorage.setItem("token", "hhhhhh");
};

export default storeToken;
