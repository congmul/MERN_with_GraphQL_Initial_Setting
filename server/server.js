const express = require('express');
// Import ApolloServer
const { ApolloServer } = require('apollo-server-express');
// Import our typeDefs and resolvers, ie: our schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;

async function startApolloServer() {
    // Create a new Apollo server and pass in our schema data
    const server = new ApolloServer({
    //What our API looks like
    typeDefs,
    //and how it resolves requests
    resolvers
    });

    await server.start();

    //Start Express Server
    const app = express();

    server.applyMiddleware({ app });

    app.use(express.urlencoded({extended: false}));
    app.use(express.json());


    db.once('open', () => {
        console.log('Db is up and running!');
        app.listen(PORT, () => {
            console.log(`App is listening for incoming request on port ${PORT}`);
            console.log(`The graphQL playgroun is configured and ready to play at http://localhost:${PORT}${server.graphqlPath}`);
        });
    })
}

startApolloServer();
