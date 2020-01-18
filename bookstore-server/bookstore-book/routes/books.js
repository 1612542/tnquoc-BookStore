var express = require('express');
var router = express.Router();
const BookModel = require('../models/books/books.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
	BookModel.getListBook().then((data) => res.send(data)).catch((err) => console.log(err));
});

router.get('/:id', function(req, res, next) {
	BookModel.getBookById(req.params.id).then((data) => res.send(data)).catch((err) => console.log(err));
});

module.exports = router;
