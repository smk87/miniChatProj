import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  AsyncStorage.getItem("token").then(value =>value;
  );
};

export default showToken;
