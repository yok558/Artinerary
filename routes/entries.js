// const express = require('express');
// const { sessionChecker } = require('../middleware/auth');

// const router = express.Router();
// const Entry = require('../models/entry');

// console.log('started entries');

// // entries
// router.get('/', sessionChecker, async (req, res, next) => {
//   const entries = await Entry.mostRecent();
//   console.log(entries);
//   res.render('entries/index', { entries, logged: req.session.logged });
// });

// router.post('/', async (req, res, next) => {
//   const newEntry = new Entry({ title: req.body.title, body: req.body.body });
//   res.redirect(`/entries/${newEntry.id}`);
// });

// // new entries
// router.get('/new', (req, res, next) => {
//   res.render('entries/new', { logged: 'true' });
// });

// // detail entry
// router.get('/:id', async (req, res, next) => {
//   const entry = await Entry.findById(req.params.id);
//   res.render('entries/show', { entry, logged: 'true' });
// });

// router.put('/:id', async (req, res, next) => {
//   const entry = await Entry.findById(req.params.id);

//   entry.title = req.body.title;
//   entry.body = req.body.body;
//   await entry.save();

//   res.redirect(`/entries/${entry.id}`);
// });

// router.delete('/:id', async (req, res, next) => {
//   await Entry.deleteOne({ _id: req.params.id });
//   res.redirect('/');
// });

// router.get('/:id/edit', async (req, res, next) => {
//   const entry = await Entry.findById(req.params.id);
//   res.render('entries/edit', { entry, logged: 'true' });
// });
// module.exports = router;
