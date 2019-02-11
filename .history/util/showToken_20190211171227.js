import { AsyncStorage, Alert } from "react-native";

async getToken=()=> {
    try {
        var token = await AsyncStorage.getItem('access_token');

        return token;
    } catch (e) {
        console.error(e);
    }
}

export default showToken;
