const express = require('express');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const path = require('path');

const router = express.Router();

const artPiece = require('../models/art');

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
  res.render('index', {
    template: req.template,
  });
});

router.post('/', async (req, res, next) => {
  const { priceValue, categoryValue, dimensionsValue } = req.body;
  console.log([priceValue, categoryValue, dimensionsValue]);

  try {
    const filterData = await artPiece.find({
      price: { $gte: 0, $lte: Number(priceValue) },
      category: categoryValue,
      size: dimensionsValue,
    });
    console.log(filterData);

    res.status(200).json(filterData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
