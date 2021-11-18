const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Book{
    authors: [String]
    description: String
    bookId: ID!
    title: String!
    image: String
    link: String
  }

  type User{
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth{
    token: ID!
    user: User
  }

  type Query{
    me: User
    books: [Book]
    book: Book
  }

  type Mutation{
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!, username: String!): Auth
    saveBook(authors: [String]!, description: String!, title: String!, bookId: ID!, image: String!,
    link: String!): User
    removeBook: User
  }
`;
module.exports = typeDefs;
