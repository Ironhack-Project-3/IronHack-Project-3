const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  incompetence: {
    type: String,
    enum: ['speaking', 'writing', 'walking'],
    default: 'speaking',
    required: true
  },
  competence: {
    type: String,
    enum: ['speaking', 'writing', 'walking'],
    default: 'speaking',
    required: true
  },
  age: Number,
  address: {
    type: String,
    required: true
  },
  picture: String,
  biography: String,
  reviews: [
    {
      user: String,
      comments: String
    }
  ]
});

const User = mongoose.model('User', userSchema);
module.exports = User;