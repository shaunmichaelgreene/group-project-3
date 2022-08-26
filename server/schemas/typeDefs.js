// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
#   podcastCount: Int
#   savedPodcasts: [Podcast]
}

  type Query {
    users: [User]
    user(username: String!): User
    # podcasts(username: String): [Podcast]
  }
`;

// export the typeDefs
module.exports = typeDefs;
