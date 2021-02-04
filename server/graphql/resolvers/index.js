
// Query Resolvers
const Query = require('./queries/Query');
const User = require('./queries/User');
const Post = require('./queries/Post');


//Mutation Resolvers

const Mutation = require('./mutation/index');


module.exports = {
    Query,
    User,
    Post,
    Mutation
}
