import { AsyncStorage, Alert } from "react-native";

async _getToken() {
    try {
        var token = await AsyncStorage.getItem('access_token');

        return token;
    } catch (e) {
        console.error(e);
    }
}

export default showToken;
