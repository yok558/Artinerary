const mongoose = require('mongoose');

const faker = require('faker');


const ArtPiece = require('./models/art');

mongoose.connect('mongodb://localhost:27017/art', { useNewUrlParser: true, useUnifiedTopology: true });



async function paitingSeed(count = 10) {
  for (let index = 0; index < count; index++) {
    const artpiece = new ArtPiece({
      artName: faker.fake('{{lorem.sentence}}'),
      size: faker.fake('{{lorem.sentence}}'),
      price: 0,
      imgLing: faker.fake('{{lorem.sentence}}'),
      category: 'sculptures',
    });
    await artpiece.save();
  }
}

paitingSeed(5);
