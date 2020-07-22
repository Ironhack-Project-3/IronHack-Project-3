const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const threadSchema = new Schema({
  title: String,
  body: String
});

const Thread = mongoose.model('Thread', threadSchema);
module.exports = Thread;