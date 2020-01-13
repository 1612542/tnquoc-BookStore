var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const secret_key = '`Mb6XB=9{n9RZjh*';

router.post(
	'/login',
	(req, res, next) => {
		passport.authenticate('local', { session: false }, (err, user, info) => {
			if (user) {
				req.user = user;
				next();
			} else {
				res.status(401).json({
					message: info.message
				});
			}
		})(req, res, next);
	},
	function(req, res, next) {
		delete req.user.user_password;
		res.json({
			token: jwt.sign(Object.assign({}, req.user), secret_key)
		});
	}
);

module.exports = router;
