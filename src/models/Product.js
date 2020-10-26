const mongoose = require('mongoose')
const Joi = require('joi')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  image: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
})

const Product = mongoose.model('Product', schema)

const validateProduct = (product) => {
  return Joi.object({
    name: Joi.string().min(4).max(100).required(),
    price: Joi.number().precision(2).required(),
    description: Joi.string().allow(''),
    image: Joi.string().allow(''),
    categoryId: Joi.string().allow('')
  }).validate(product)
}

exports.Product = Product
exports.validateProduct = validateProduct