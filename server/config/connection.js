const mongoose = require("mongoose");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://27017/localhost/group-project-3",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
