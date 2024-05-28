const User = require('../models/user');

// Functions to interact with the user collection
module.exports.createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

module.exports.findUserByUsername = async (username) => {
  return await User.findOne({ username });
};
