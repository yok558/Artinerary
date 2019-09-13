const mongoose = require('mongoose');

const artPieceSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  size: String,
  category: String,
});


module.exports = mongoose.model('ArtPiece', artPieceSchema);
