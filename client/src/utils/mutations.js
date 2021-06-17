import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(username: $username) {
      _id
      username
      email
      password
      bookCount
      savedBooks
    }
  }
`;

export const ADD_BOOK = gql`
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
