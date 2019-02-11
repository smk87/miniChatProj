import { AsyncStorage, Alert } from "react-native";

saveToken = async token => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    // Error saving data
  }
};

export default saveToken;
