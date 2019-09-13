const express = require("express");
const mongoose = require("mongoose");
const handlebars = require("handlebars");
const path = require("path");
const faker = require("faker");

const router = express.Router();

const artPiece = require("../models/art");

const hbs = handlebars.create({
  defaultLayout: "layout",
  extname: "hbs",
  layoutsDir: path.join(__dirname, "views"),
  partialsDir: path.join(__dirname, "views")
});

// let like = 10;
// let bascet = 4;
// const store = [];
// const img = [];
// for (let index = 0; index < 10; index++) {
//   const element = {
//     name: faker.name.findName(),
//     img:
//       "https://avatars.mds.yandex.net/get-pdb/33827/7f6d22fd-1988-44e6-b57d-28247b27c680/s1200?webp=false",
//     author: faker.internet.userName(),
//     price: faker.commerce.price(),
//     size: faker.commerce.product()
//   };
//   const pic = {
//     img:
//       "https://avatars.mds.yandex.net/get-pdb/33827/7f6d22fd-1988-44e6-b57d-28247b27c680/s1200?webp=false"
//   };

//   img.push(pic);
//   store.push(element);
// }
// const index = store[0];

// console.log("img: ", index);

mongoose.connect("mongodb://localhost:27017/art", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

// router.get("/", (req, res, next) => {
//   res.render("index", {
//     countLike: like,
//     countBascet: bascet,
//     store: store,
//     gallery: img
//   });
// });

// router.get("/qq", (req, res) => {
//   res.render("object", {
//     countLike: like,
//     countBascet: bascet,
//     object: index
//   });
// });

// router.get('/:filtres', async function(req, res, next) {
//   res.send('страница карт!');
//   let nameCategory = req.params.category;
//   let collection = [];
//   collection = await artPiece.find({ category: 'nameCategory' });
//   console.log(collection);
// });

// router.get('/painting', (req, res, next) => {
//   res.send('страница картинами!');
// });

// router.get('/photograph', (req, res, next) => {
//   res.send('страница с фотографиями!');
// });

// router.get('/sculpture', (req, res, next) => {
//   res.send('страница со скульптурами!');
// });

// const express = require('express');
// const { sessionChecker } = require('../middleware/auth');
// const User = require('../models/users');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.redirect('/entries');
// });
// router.get('/login', sessionChecker, (req, res, next) => {
//   res.render('login');
// });
// router.post('/login', async (req, res, next) => {
//   const { email, password } = req.body;
//   // const password = req.body.password;

//   const user = await User.findOne({ email });
//   if (!user) {
//     res.redirect('/login');
//     // } else if (!user.validPassword(password)) {
//   } else if (user.password !== password) {
//     res.redirect('/login');
//   } else {
//     req.session.user = user;
//     res.redirect('/');
//   }
// });
// router.get('/signup', sessionChecker, (req, res, next) => {
//   res.render('signup', { logged: req.session.logged });
// });
// router.post('/signup', async (req, res, next) => {
//   try {
//     const user = new User({
//       email: req.body.email,
//       login: req.body.login,
//       password: req.body.password,
//     });
//     await user.save();
//     req.session.user = user;
//     res.render('entries/index', { login: user.login });
//   } catch (error) {
//     res.redirect('/signup');
//   }
// });

// router.get('/logout', async (req, res, next) => {
//   if (req.session.user && req.cookies.user_sid) {
//     try {
//       // res.clearCookie('user_sid');
//       await req.session.destroy();
//       res.redirect('/login');
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     res.redirect('/login');
//   }
// });

module.exports = router;
