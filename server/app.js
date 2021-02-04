//servers
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
//const { typeDefs } = require('./graphql/Query');
const  resolvers  = require('./graphql/resolvers/index');
require('dotenv').config();

const { readFileSync } = require('fs');
const path = require('path');
const importGraphQL = (file) => {
    return readFileSync(path.join(__dirname,file));
}


const query = importGraphQL('./graphql/Query.graphql');
const gqlWrapper = (...files) => {
    return gql`${files}`;
}

//console.log(typeDefx);
//Models
const User = require('./models/User');
const Post = require('./models/Post');

// Connection
const DB_URI = process.env.DB_URI;
const {connectToDb} = require('./db/connection');
const  connection = connectToDb(DB_URI);




const server = new ApolloServer({
    typeDefs: gqlWrapper(query),
    resolvers,
    context:{
	User,
	Post
    }
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	  );

