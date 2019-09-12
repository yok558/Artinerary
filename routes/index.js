const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const artPiece = require('../models/art');


mongoose.connect('mongodb://localhost:27017/art', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();


router.get('/', async function (req, res, next) {
  res.send('страница карт!!!!');
  collection = await artPiece.find();
  console.log(collection);
})



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
