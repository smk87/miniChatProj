import { AsyncStorage } from "react-native";

const loadToken = async () => {
  const value = await AsyncStorage.getItem("token");
  //console.log(value); // Return hello
  return value;
};

export default loadToken;
