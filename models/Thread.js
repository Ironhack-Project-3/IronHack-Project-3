const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const threadSchema = new Schema({
  title: String,
  description: String,
  // user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Thread = mongoose.model('Thread', threadSchema);
module.exports = Thread;