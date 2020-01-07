import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

import BookCard from '../../../components/BookCard';
import RowOfBookCard from '../../../components/RowOfBookCard';
import BookCarousel from '../../../components/BookCarousel';

const styles = () => ({
	containerDiv: {
		backgroundColor: 'white',
		height: '730px',
		width: '100%',
		padding: '15px 20px'
	}
});

const similarGenres = [
	<BookCard />,
	<BookCard />,
	<BookCard />,
	<BookCard />,
	<BookCard />,
	<BookCard />,
	<BookCard />,
	'abc',
	<BookCard />
];

const similarAuthor = [ <BookCard />, <BookCard />, <BookCard /> ];

const BookRelated = ({ classes }) => {
	return (
		<div className={classes.containerDiv}>
			<BookCarousel title={'Similar Genres'} data={similarGenres} />
			<br />
			<BookCarousel title={'Similar Author'} data={similarAuthor} />
			<br />
		</div>
	);
};

export default withStyles(styles)(BookRelated);
