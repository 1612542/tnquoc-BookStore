import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	divStyling: {
		display: 'block',
		backgroundColor: 'white',
		height: '350px',
		marginTop: '10px',
		marginBottom: '20px',
		width: '700px',
		padding: '10px 10px'
	},
	temp: {
		margin: 0,
		fontWeight: '500'
	}
});

const BookIntroduce = ({ classes }) => {
	return (
		<div className={classes.divStyling}>
			<h2 className={classes.temp}>Book Introduce</h2>
			<p>
				How to Win Friends and Influence People is a self-help book written by Dale Carnegie, published in 1936.
				Over 15 million copies have been sold worldwide, making it one of the best-selling books of all time. In
				2011, it was number 19 on Time Magazine's list of the 100 most influential books. Carnegie had been
				conducting business education courses in New York since 1912. In 1934, Leon Shimkin of the publishing
				firm Simon & Schuster took one of Carnegie's 14-week courses on human relations and public speaking;
				afterward, Shimkin persuaded Carnegie to let a stenographer take notes from the course to be revised for
				publication. The initial five thousand copies of the book sold exceptionally well, going through 17
				editions in its first year alone. In 1981, a revised edition containing updated language and anecdotes
				was released. The revised edition reduced the number of sections from six to four, eliminating sections
				on effective business letters and improving marital satisfaction.
			</p>
		</div>
	);
};

export default withStyles(styles)(BookIntroduce);
