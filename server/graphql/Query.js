const {  gql } = require('apollo-server-express');

const typeDefs = `
scalar Date

type Query{
  user(id:ID!): User!
  users: [User]
  post(id:ID!): Post!
  posts: [Post!]
  }

type User{
  id: ID!
  username: String!
  createdAt: Date
  posts: [Post!]
  }

type Post{
     id: ID!
     text: String!
     createdAt: Date!
     userId: ID!
     user: User!
}


type Mutation{
  createUser(data:CreateUserInput!): User!
  createPost(data:CreatePostInput!): Post!
  }


input CreateUserInput{
  username: String!
  password: String!

  }

input CreatePostInput{
  title: String!
  text: String!
  userID: ID!

}

`;


module.exports = {
    typeDefs

}
