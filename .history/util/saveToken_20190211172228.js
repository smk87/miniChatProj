import { AsyncStorage, Alert } from "react-native";

saveToken = async () => {
    try {
        await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
        // Error saving data
    }
};);
};

export default saveToken;
