import { AsyncStorage } from "react-native";

const loadToken = async () => {
  return (value = await AsyncStorage.getItem("token"));
  //console.log(value); // Return hello
};

export default loadToken;
