import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	card: {
		padding: 'none',
		maxWidth: '180px',
		'&:hover': {
			cursor: 'pointer',
			boxShadow: '5px 5px 5px 5px #E2E2E2, 5px 5px 5px 5px #E2E2E2'
		}
	}
});

const BookCard = ({ classes }) => {
	return (
		<Card className={classes.card}>
			<CardContent>
				<div style={{ textAlign: 'center' }}>
					<img alt="" src="/SampleBook.png" width="120px" height="180px" />
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
