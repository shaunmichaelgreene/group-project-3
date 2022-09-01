import { gql } from "@apollo/client";

// all users
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedPodcasts {
        podcastId
        # image
        description
        title
        # link
      }
    }
  }
`;

// query for homepage view
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      # podcastCount
      podcasts {
        _id
        title
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      podcasts {
        _id
      }
    }
  }
`;

// all podcasts
export const QUERY_PODCASTS = gql`
  query podcasts($username: String) {
    podcasts(username: $username) {
      _id
      podcastText
      createdAt
      username
    }
  }
`;

// one podcast
export const QUERY_PODCAST = gql`
  query QUERY_PODCAST($id: ID!) {
    QUERY_PODCAST(_id: $id) {
      _id
      QUERY_PODCASTText
      createdAt
      username
    }
  }
`;
