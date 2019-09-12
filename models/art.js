const mongoose = require('mongoose');

const artPieceSchema = new mongoose.Schema({
  artName: String,
  size: String,
  price: Number,
  imgLing: String,
  category: String,
})

module.exports = mongoose.model('ArtPiece', artPieceSchema);
