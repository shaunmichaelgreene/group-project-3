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
    me: User
    users: [User]
    user(username: String!): User
    # podcasts(username: String): [Podcast]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
