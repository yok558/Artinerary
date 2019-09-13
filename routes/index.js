const express = require('express');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const path = require('path');

const router = express.Router();

const ArtPiece = require('../models/art');

const hbs = handlebars.create({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views'),
  partialsDir: path.join(__dirname, 'views'),
});

mongoose.connect('mongodb://localhost:27017/art', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const temp = async (req, res, next) => {
  const template = await hbs.getTemplate('views/store.hbs', {
    precompiled: true,
  });
  // console.log(template);
  req.template = template;

  next();
};

router.get('/', temp, async (req, res) => {
  // const findAll = await ArtPiece.find();
  res.render('index', {
    template: req.template,
  });
});

router.post('/', async (req, res, next) => {
  const { priceValue, categoryValue, sizeValue } = req.body;
  console.log([priceValue, categoryValue, sizeValue]);

  const fields = {};
  if (priceValue) {
    fields.price = { $gte: 0, $lte: Number(priceValue) };
  }
  if (categoryValue) {
    fields.category = categoryValue;
  }
  if (sizeValue) {
    fields.size = sizeValue;
  }

  try {
    const filterData = await ArtPiece.find(fields);
    console.log(filterData);

    res.status(200).json(filterData);
  } catch (error) {
    next(error);
  }
});

router.get('/store:_id', async (req, res) => {
  const id = req.params._id;
  const data = await ArtPiece.findOne({ _id: id });
  res.render('object', {
    object: data,
  });
});

module.exports = router;
