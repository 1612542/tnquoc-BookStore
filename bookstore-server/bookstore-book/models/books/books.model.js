var db = require('../db');

module.exports = {
	getListBook: () => {
		return db.load(`select * from books`);
	},
	query: (limit, offset, name) => {
		return db.load(
			`select user.username, user.displayName, user.tutorId, user.email, user.phone, user.id, user.lock  from user where username like '%${name}%' or displayName like '%${name}%' limit ${limit} offset ${offset}`
		);
	},
	count: (name) => {
		return db.load(
			`select count(*) as total from user where username like '%${name}%' or displayName like '%${name}%'`
		);
	},
	queryByType: (limit, offset, type, name) => {
		if (type == 'tutor') {
			return db.load(
				`select user.username, user.displayName, user.tutorId, user.email, user.phone, user.id, user.lock from user where tutorId is not null and (username like '%${name}%' or displayName like '%${name}%') limit ${limit} offset ${offset}`
			);
		}
		return db.load(
			`select user.username, user.displayName, user.tutorId, user.email, user.phone, user.id, user.lock  from user where tutorId is null and (username like '%${name}%' or displayName like '%${name}%') limit ${limit} offset ${offset}`
		);
	},
	countByType: (type, name) => {
		if (type == 'tutor') {
			return db.load(
				`select count(*) as total from user where tutorId is not null and (username like '%${name}%' or displayName like '%${name}%')`
			);
		}
		return db.load(
			`select count(*) as total from user where tutorId is null and (username like '%${name}%' or displayName like '%${name}%')`
		);
	},
	udpate: (user) => {
		return db.update(`user`, user, 'id');
	}
};
