import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	card: {
		padding: 'none',
		minWidth: '25%',
		maxWidth: '250px',
		'&:hover': {
			cursor: 'pointer'
			// boxShadow: '5px 5px 5px 5px #E2E2E2, 5px 5px 5px 5px #E2E2E2'
		}
	},
	imgCard: {
		minWidth: '85%',
		maxWidth: '180px',
		height: '230px',
		'&:hover': {
			cursor: 'pointer',
			boxShadow: '3px 3px 3px 3px #E2E2E2, 3px 3px 3px 3px #E2E2E2'
		}
	},
	title: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		// color: '#00D0E5',
		marginBottom: '15px'
	}
});

const BookCard = ({ classes }) => {
	return (
		<Card className={classes.card} elevation={0}>
			<h3 className={classes.title}>Book of the Week</h3>
			<CardContent>
				<div style={{ textAlign: 'center', marginBottom: '5px' }}>
					<img alt="" src="/SampleBook.png" className={classes.imgCard} />
				</div>
				<Typography variant="body2" style={{ fontWeight: 'bold' }} component="p">
					How to Win Friends & Influence People
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Dale Carnegie
				</Typography>
				<Typography variant="h6" color="primary">
					100.000đ
				</Typography>
			</CardContent>
		</Card>
	);
};

export default withStyles(styles)(BookCard);
