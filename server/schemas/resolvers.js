const { User } = require("../models");

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find().select("-__v -password");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
  },
};

module.exports = resolvers;
