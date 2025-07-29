const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: [
      'Technology', 
      'Science', 
      'Health', 
      'Business', 
      'Entertainment', 
      'Sports', 
      'Politics',
      'Education',
      'Other'
    ],
    default: 'Other'
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true,
    maxlength: [200, 'Description cannot be more than 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Please add content']
  },
  author: {
    type: String,
    required: true,
    default: 'Anonymous',
    trim: true,
    maxlength: [50, 'Author name cannot be more than 50 characters']
  },
  tags: {
    type: [String],
    validate: {
      validator: function(tags) {
        return tags.length <= 5;
      },
      message: 'Cannot have more than 5 tags'
    },
    default: []
  },
  image: {
    type: String,
    default: 'default-article.jpg',
    match: [
      /\.(jpg|jpeg|png|gif)$/i,
      'Please use a valid image URL with jpg, jpeg, png, or gif extension'
    ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const articleModel = mongoose.model('Article', ArticleSchema);
module.exports = articleModel;