const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    authors: [String]!
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: ID!, description: String!, authors: [String]!, image: String, link: String, title: String!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;


//ADD LOGIN AUTHENICATION QUERY LINES 17 THROUGH.....
//POSSIBLY UPDATE MUTATION, QUERIES ETC