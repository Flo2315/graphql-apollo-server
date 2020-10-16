const mongoose = require('mongoose')
const Joi = require('joi')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
})

const Category = mongoose.model('Category', schema)

const validateCategory = (category) => {
  return Joi.object({
    name: Joi.string().min(5).max(50).required(),
  }).validate(category)
}

exports.Category = Category
exports.validateCategory = validateCategory