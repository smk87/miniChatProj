import { AsyncStorage } from "react-native";

async function storeToken(params) {
  await AsyncStorage.setItem("token", params);
}
export default storeToken;
