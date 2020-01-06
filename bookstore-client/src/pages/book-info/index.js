import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import BookDetailInfo from './book-detail-info';
import BookGeneralInfo from './book-general-info';
import BookIntroduce from './book-introduce';
import BookRelated from './book-related';

const styles = () => ({
	myContainer: {
		width: '1100px'
		// minWidth: '1084px',
		// maxWidth: '85%'
	}
});

const BookInfo = ({ classes }) => {
	return (
		<Fragment>
			<Container className={classes.myContainer}>
				<BookGeneralInfo />
				<BookDetailInfo />
				<BookIntroduce />
				<BookRelated />
			</Container>
		</Fragment>
	);
};

export default withStyles(styles)(BookInfo);
