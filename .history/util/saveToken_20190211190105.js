import storage from "./storage";

//Save token to AsyncStorage
storage.save({
  key: "auth", // Note: Do not use underscore("_") in key!
  data: {
    token: token
  },

  // if expires not specified, the defaultExpires will be applied instead.
  // if set to null, then it will never expire.
  expires: 1000 * 3600
});

export default storage;
