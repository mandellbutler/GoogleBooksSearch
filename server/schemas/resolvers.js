const { USER } = require('../models');

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
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;