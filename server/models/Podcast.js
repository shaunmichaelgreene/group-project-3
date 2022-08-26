const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPodcasts` array in User.js
const podcastSchema = new Schema({
  title: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved podcast id from API
  podcastId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  url: {
    type: String,
  },
  numberOfEpisodes: {
    type: String,
    required: true,
  },
});

module.exports = podcastSchema;
