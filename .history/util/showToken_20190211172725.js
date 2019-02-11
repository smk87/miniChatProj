import { AsyncStorage, Alert } from "react-native";

showToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      // We have data!!
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};

export default showToken;
