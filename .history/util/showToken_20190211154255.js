import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  AsyncStorage.getItem("Key_27").then(value => Alert.alert(value));
};

export default showToken;
