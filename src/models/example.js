const mongoose = require('mongoose');

const exampleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
});

module.exports = mongoose.model('Example', exampleSchema);
