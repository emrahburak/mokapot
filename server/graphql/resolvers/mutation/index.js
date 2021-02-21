const user = require('./user.mutation');
const post = require('./post.mutation');


const Mutation = {
    ...user,
    ...post
};

module.exports = Mutation;
