import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  AsyncStorage.getItem("token").then(value => Alert.alert(value));
};

export default showToken;
