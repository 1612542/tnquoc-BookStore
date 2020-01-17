var express = require('express');
var router = express.Router();
const BookModel = require('../models/books/books.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
	// res.send('respond with a resource');
	// res.json(BookModel.getListBook(limit, offset));
	BookModel.getListBook().then((data) => res.send(data)).catch((err) => console.log(err));
});

module.exports = router;
