import { gql } from "@apollo/client";

// all users
export const GET_ME = gql`
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
