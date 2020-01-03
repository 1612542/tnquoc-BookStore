import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import BookCard from './BookCard';

const RowOfBookCard = () => {
	return (
		<Grid container direction="row" spacing={2}>
			<Grid item xs>
				<BookCard />
			</Grid>
			<Grid item xs>
				<BookCard />
			</Grid>
			<Grid item xs>
				<BookCard />
			</Grid>
			<Grid item xs>
				<BookCard />
			</Grid>
		</Grid>
	);
};

export default RowOfBookCard;
