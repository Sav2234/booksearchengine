import { gql } from '@apollo/client';

export const QUERY_LOGIN = gql`
query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        email
        password
    }
}
`;

export const QUERY_ADD_USER = gql`
    query addUser($email: String!, $password: String!, $username: String!) {
        addUser(email: $email, password: $password, username: $username) {
            email
            password
            username
        }
    }
    `;

export const QUERY_SAVE_BOOK = gql`
    query saveBook($authors: [String]!, $description: String!, $title: String!, $bookId: ID!, 
        $image: String!, $link: String!) {
            saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, 
            image: $image, link: $link) {
                authors
                description
                title
                bookId
                image
                link
            }
        }
    `;

export const QUERY_ME = gql`
  {
      me {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                title
                image
                link
            }
      }
  }
    `;

// export const QUERY_REMOVE_BOOK = gql`
//     mutation removeBook 
// `;