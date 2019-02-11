import { AsyncStorage } from "react-native";

const removeToken = async () => {
  return await AsyncStorage.removeItem("token");
  //console.log(value); // Return hello
};

export default removeToken;
