const PORT = process.env.PORT || 4000

const express = require('express')
const { ApolloServer } = require('apollo-server-express')

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
}

const app = express()
app.use('/public', express.static('public'))

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
  resolvers,
  introspection: true,
  playground: true,
})

server.applyMiddleware({ app })

app.listen({ port: PORT }, (url) =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
