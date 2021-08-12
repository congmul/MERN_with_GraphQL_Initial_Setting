const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/GraphQL",

    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

module.exports = mongoose.connection;