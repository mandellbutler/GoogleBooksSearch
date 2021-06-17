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

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addBook(bookId: ID!, description: String!, authors: [String]!, image: String, link: String, title: String!): User
    removeBook(bookId: ID!): User
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;


//ADD LOGIN AUTHENICATION QUERY LINES 17 THROUGH.....
//POSSIBLY UPDATE MUTATION, QUERIES ETC