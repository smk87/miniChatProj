import { AsyncStorage, Alert } from "react-native";

const showToken = () => {
  AsyncStorage.getItem("token").then(value =>
    console.log(`Saved Token: ${value}`)
  );
};

export default showToken;
