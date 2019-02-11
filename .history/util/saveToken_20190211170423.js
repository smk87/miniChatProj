import { AsyncStorage, Alert } from "react-native";

const saveToken = token => {
  AsyncStorage.setItem("token", JSON.stringify(token));

  Alert.alert("Value Stored Successfully.");
};

export default saveToken;
