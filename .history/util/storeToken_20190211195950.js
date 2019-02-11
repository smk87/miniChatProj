import { AsyncStorage } from "react-native";

async function storeToken(params) {
  await AsyncStorage.setItem("token");
}
export default storeToken;
