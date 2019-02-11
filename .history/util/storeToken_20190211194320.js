import { AsyncStorage } from "react-native";

const save = async () => {
  await AsyncStorage.setItem("token", "hhhhhh");
};

export default save;
