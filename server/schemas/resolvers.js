const { Book } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    books: async () => {
      return Book.find().sort({ createdAt: -1 });
    },

    book: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },
  },

  Mutation: {
    saveBook: async (parent, { bookText, bookAuthor }) => {
      return Book.create({ bookText, bookAuthor });
    },
  //   addComment: async (parent, { bookId, commentText }) => {
  //     return Book.findOneAndUpdate(
  //       { _id: bookId },
  //       {
  //         $addToSet: { comments: { commentText } },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //   },
    removeBook: async (parent, { bookId }) => {
      return Book.findOneAndDelete({ _id: bookId });
    },
  //   removeComment: async (parent, { bookId, commentId }) => {
  //     return Book.findOneAndUpdate(
  //       { _id: bookId },
  //       { $pull: { comments: { _id: commentId } } },
  //       { new: true }
  //     );
  //   },
  },
};

module.exports = resolvers;
