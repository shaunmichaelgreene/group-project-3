// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    podcastCount: Int
    savedPodcasts: [Podcast]
  }

  type Podcast {
    podcastId: ID!
    # first: Int
    # sort: {sortBy: FOLLOWER_COUNT, direction: DESCENDING}
    title: [String]
    description: String
    url: String
    imageUrl: String
    latestEpisodeDate: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    podcasts(username: String): [Podcast]
  }

  input PodcastInput {
    podcastId: ID!
    title: [String]
    description: String
    url: String
    image: String
    numberOfEpisodes: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePodcast(podcastText: String!): User
    removePodcast(podcastId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
