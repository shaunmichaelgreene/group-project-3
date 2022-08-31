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
        image
        description
        title
        link
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
