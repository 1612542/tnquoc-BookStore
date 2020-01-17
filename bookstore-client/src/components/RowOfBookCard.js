import React, { Fragment, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Loading from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import BookCard from './BookCard';

const RowOfBookCard = ({ data }) => {
	if (!data) return <Fragment />;

	return (
		<Grid container direction="row" spacing={2}>
			{data.map((book) => (
				<Grid item xs>
					<BookCard book={book} />
				</Grid>
			))}
		</Grid>
	);
};

export default RowOfBookCard;
