import { AsyncStorage, Alert } from "react-native";

showToken = async () => {
  try {
    const value = await AsyncStorage.getItem("TASKS");
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

export default showToken;
