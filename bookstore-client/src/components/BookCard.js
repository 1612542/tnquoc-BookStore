import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	card: {
		padding: 'none',
		minWidth: '25%',
		maxWidth: '250px',
		'&:hover': {
			cursor: 'pointer',
			boxShadow: '5px 5px 5px 5px #E2E2E2, 5px 5px 5px 5px #E2E2E2'
		}
	},
	imgCard: {
		minWidth: '75%',
		maxWidth: '150px',
		height: '180px'
	},
	linkStyling: {
		textDecoration: 'none'
	}
});

const BookCard = ({ book, classes }) => {
	if (!book) return <Fragment />;
	const { id } = book;

	return (
		<Link to={`/books/${id}`} className={classes.linkStyling}>
			<Card className={classes.card} elevation={0}>
				<CardContent>
					<div style={{ textAlign: 'center' }}>
						<img alt="" src={book.imgSrc} className={classes.imgCard} />
					</div>
					<Typography variant="body2" style={{ fontWeight: 'bold' }} component="p">
						{book.bookName}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{book.author}
					</Typography>
					<Typography variant="h6" color="primary">
						${book.price}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
};

export default withStyles(styles)(BookCard);
