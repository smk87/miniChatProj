export default const fetch = async () => {
    const value = await AsyncStorage.getItem("token");
    console.log(value); // Return hello
    return value;
};