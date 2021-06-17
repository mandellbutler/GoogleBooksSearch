const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { user_Id }) => {
      return User.findOne({ _id: user_Id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      return User.create(args);
    },
    addBook: async (parent, args, context) => {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $push: { savedBooks: args },
        },
        {
          new: true,
        }
      );
    },
    removeBook: async (parent, { bookId }, context) => {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: bookId } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;