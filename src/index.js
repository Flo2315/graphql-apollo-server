const PORT = process.env.PORT || 4000;

const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const { Query, CategoryResolver, ProductResolver } = require('./Query')
const Mutation = require('./Mutation')

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const resolvers = {
  Query,
  Mutation,
  Category: CategoryResolver,
  Product: ProductResolver
};

const server = new ApolloServer({ 
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
  resolvers,
  introspection: true,
  playground: true,
})

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
