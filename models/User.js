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
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  role: {
    type: String,
    enum: ['user', 'provider'],
    // required: true

  }, 

  needs: [['write'], ['walk'], ['call'], ['tandem'], ['hang']],
  skills: [['write'], ['walk'], ['call'], ['tandem'], ['hang']],


  age: Number,
  address: {
    type: String,
    // required: true
  },
  picture: String,
  bio: String,
  reviews: [
    {
      user: String,
      comments: String
    }
  ],
  thread: {type: Schema.Types.ObjectId, ref: 'Thread'}
},
{
  timestamps: true
});
//-----------------is this right-----?????----------------------------------

// const threadSchema = new Schema({
//   title: String,
//   description: String,
//   owner: { type: Schema.Types.ObjectId, ref: 'User' },
//   comment: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'comments'
//     }
//   ]
// });
//------------------??or in the thread schema---------------------------------

const User = mongoose.model('User', userSchema);
module.exports = User;