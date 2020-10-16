const { UserInputError } = require('apollo-server')

const { Product, validateProduct } = require('./models/Product')
const { Category, validateCategory } = require('./models/Category')

const Mutation = {
  addCategory(_, payload) {
    const {value, error} = validateCategory(payload, { abortEarly: true })
    if (error) {
      throw new UserInputError('Failed to create category', { validationErrors: error.details })
    }
    return Category.create(value)
  },
  addProduct(_, payload) {
    const {value, error} = validateProduct(payload, { abortEarly: true })
    if (error) {
      throw new UserInputError('Failed to create product', { validationErrors: error.details })
    }
    return Product.create(value)
  }
}

module.exports = Mutation
