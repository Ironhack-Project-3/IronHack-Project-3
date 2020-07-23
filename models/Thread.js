const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const threadSchema = new Schema({
  title: String,
  description: String
});

const Thread = mongoose.model('Thread', threadSchema);
module.exports = Thread;