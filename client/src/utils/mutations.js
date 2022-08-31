import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_PODCAST = gql`
  mutation savePodcast($podcastData: PodcastInput!) {
    savePodcast(podcastData: $podcastData) {
      _id
      username
      email
      savedPodcasts {
        podcastId
        image
        description
        title
        url
      }
    }
  }
`;

export const REMOVE_PODCAST = gql`
  mutation removePodcast($podcastId: ID!) {
    removePodcast(podcastId: $podcastId) {
      _id
      username
      email
      savedPodcasts {
        podcastId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

// export const SEARCH = gql`
// mutation search($search: String!) {
//     search(search: $search)
//  `;
