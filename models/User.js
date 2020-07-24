const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  
  // username: {
  //   type: String,
  //   required: true,
  //   index: {
  //     unique: true
  //   }
  // },
  // password: {
  //   type: String,
  //   required: true,
  //   index: {
  //     unique: true
  //   }
 // },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // role: {
  //   type: String,
  //   enum: ['user', 'provider'],
  //   required: true
  // },
  
  // incompetence: [['speaking'], ['writing'], ['walking']],
  // competence: [['speaking'], ['writing'], ['walking']],

  // age: Number,
  // address: {
  //   type: String,
  //   required: true
  // },
  // picture: String,
  // biography: String,
  // reviews: [
  //   {
  //     user: String,
  //     comments: String
  //   }
  // ],
  // thread: {type: Schema.Types.ObjectId, ref: 'Thread'}
});

const User = mongoose.model('User', userSchema);
module.exports = User;