const { Product } = require('./models/Product')
const { Category } = require('./models/Category')

const Query = {
  products: (_, { filter }) => {
    let query = {}
    if (filter && filter.name) query.name = { $regex: filter.name }
    if (filter && filter.categoryId) query.categoryId = filter.categoryId

    return Product.find(query, (error, products) => {
      if (error) console.log(error)
      return products
    })
  },
  product: (_, { id }) => Product.findById(id, (error, product) => {
    if (error) console.log(error)
    return product
  }),
  categories: (_, { filter }) => {
    let query = {}
    if (filter && filter.name) query.name = { $regex: filter.name }

    return Category.find(query, (error, categories) => {
      if (error) console.log(error)
      return categories
    })
  },
  category: (_, { id }) => Category.findById(id, (error, category) => {
    if (error) console.log(error)
    return category
  }),
}

const CategoryResolver = {
  products(parent) {
    return Product.find({ categoryId: parent.id}, (error, products) => {
      if (error) console.log(error)
      return products
    })
  }
}

const ProductResolver = {
  category(parent) {
    return Category.findById(parent.categoryId, (error, catagory) => {
      if (error) console.log(error)
      return catagory
    })
  }
}

exports.Query = Query
exports.CategoryResolver = CategoryResolver
exports.ProductResolver = ProductResolver
