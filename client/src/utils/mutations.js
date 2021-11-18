import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        email
        password
    }
}
`;

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!, $username: String!) {
        addUser(email: $email, password: $password, username: $username) {
            email
            password
            username
        }
    }
    `;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: [String]!, $description: String!, $title: String!, $bookId: ID!, 
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

// export const REMOVE_BOOK = gql`
//     mutation removeBook 
// `;