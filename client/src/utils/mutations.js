import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(username: $username) {
      username
      email
      password
      bookCount
      savedBooks
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation addBook($userId: ID!, $savedBooks: String!) {
    addBook(userId: $userId, savedBooks: $savedBooks) {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation addBook($userId: ID!, $savedBooks: String!) {
    addBook(userId: $userId, savedBooks: $savedBooks) {
      bookId
    }
  }
`;


