const userModel = require("../../models/userModel");

const userResolvers = {
  Query: {
    users: async () => await userModel.getAllUsers(),
    user: async (_, { id }) => await userModel.getUserById(id),
  },
  Mutation: {
    addUser: async (_, { name, email, password }) =>
      await userModel.addUser(name, email, password),
    updateUser: async (_, { id, name, email }) =>
      await userModel.updateUser(id, name, email),
    deleteUser: async (_, { id }) => await userModel.deleteUser(id),
  },
};

module.exports = userResolvers;
