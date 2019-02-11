import { AsyncStorage, Alert } from "react-native";

const showToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
    //console.log(error);
  }
};

export default showToken;
