import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import Appbar from '../../components/AppBar';
import Footer from '../../components/Footer';
import TabRoutes from '../../components/TapRoute';
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

const BookInfo = ({ classes, match: { params }, BaseLayout }) => {
	const { id } = params;
	const [ book, setBook ] = useState({});

	useEffect(() => {
		axios
			.get(`http://localhost:8080/home/${id}`)
			.then((res) => {
				setBook(res.data[0]);
			})
			.catch((err) => console.log(err));
	}, []);

	if (!book) return <Fragment />;

	return (
		<div>
			<Appbar />
			<TabRoutes />
			<Fragment>
				<Container className={classes.myContainer}>
					<BookGeneralInfo book={book} />
					<BookDetailInfo book={book} />
					<BookIntroduce />
					<BookRelated book={book} />
					<BookReview />
				</Container>
			</Fragment>
			<Footer />
		</div>
	);
};

export default withStyles(styles)(BookInfo);
