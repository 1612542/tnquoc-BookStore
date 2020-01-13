const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user/user.model');
const passportJWT = require('passport-jwt');

const secret_key = '`Mb6XB=9{n9RZjh*';
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// passport.use(
// 	new JWTStrategy(
// 		{
// 			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
// 			secretOrKey: secret_key
// 		},
// 		function(jwtPayload, cb) {
// 			//find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
// 			return UserModel.findOneByUsername(jwtPayload.username)
// 				.then((user) => {
// 					if (user.length <= 0) {
// 						return cb(null, false);
// 					} else {
// 						delete user[0].password;
// 						return cb(null, user[0]);
// 					}
// 				})
// 				.catch((err) => {
// 					return cb(err);
// 				});
// 		}
// 	)
// );

passport.use(
	new LocalStrategy(
		{
			usernameField: 'username',
			passwordField: 'password'
		},
		function(username, password, cb) {
			console.log(username, password);
			return UserModel.findOneByUsername(username)
				.then((user) => {
					console.log(user);
					if (!user || user.length <= 0) {
						return cb(null, false, { message: 'user.incorrect' });
					}

					if (password === user[0].user_password) {
						return cb(null, user[0], { message: 'Logged In Successfully' });
					} else {
						return cb(null, false, { message: 'user.incorrect' });
					}
				})
				.catch((err) => {
					console.log(err);

					cb(err, false, { message: 'user.incorrect' });
				});
		}
	)
);

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});
