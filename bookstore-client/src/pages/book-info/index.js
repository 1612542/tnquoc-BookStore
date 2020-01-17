import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import BookDetailInfo from './book-detail-info';
import BookGeneralInfo from './book-general-info';
import BookIntroduce from './book-introduce';
import BookRelated from './book-related';
import BookReview from './book-review';

const styles = () => ({
	myContainer: {
		width: '1100px'
		// minWidth: '1084px',
		// maxWidth: '85%'
	}
});

const BookInfo = ({ classes, match: { params } }) => {
	const { id } = params;
	const [ book, setBook ] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/home/${id}`)
			.then((res) => {
				setBook(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Fragment>
			<Container className={classes.myContainer}>
				<BookGeneralInfo data={book} />
				<BookDetailInfo data={book} />
				<BookIntroduce />
				<BookRelated />
				<BookReview />
			</Container>
		</Fragment>
	);
};

export default withStyles(styles)(BookInfo);
