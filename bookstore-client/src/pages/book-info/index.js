import React from 'react';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import DoneIcon from '@material-ui/icons/Done';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import RatingStar from '../../components/RatingStar';

const styles = () => ({
	myContainer: {
		// width: '85%',
		minWidth: '1084px',
		maxWidth: '85%'
	},
	vl: {
		display: 'block',
		width: '2px',
		backgroundColor: '#E5E5E5',
		height: '55vh'
	},
	imgCard: {
		// minWidth: '180px',
		// maxWidth: '220px',
		// height: '300px'
		minWidth: '150',
		maxWidth: '200px',
		height: '250px'
	}
});

const BookDetail = ({ classes }) => {
	return (
		<Container className={classes.myContainer}>
			<div style={{ display: 'block', backgroundColor: 'white', height: '55vh', marginTop: '10px' }}>
				<div style={{ display: 'flex' }}>
					<div id="sidebar" style={{ paddingLeft: '10px', paddingRight: '10px', width: '40%' }}>
						<div style={{ paddingTop: '40px', display: 'flex' }}>
							<div style={{ textAlign: 'center', width: '40%' }}>
								<img alt="" src="/SampleBook.png" width="120px" height="180px" />
							</div>
							<div style={{ textAlign: 'center', width: '60%' }}>
								<img alt="" src="/SampleBook.png" className={classes.imgCard} />
							</div>
						</div>
					</div>
					<div className={classes.vl} />
					<div id="mainContent" style={{ paddingLeft: '10px', paddingRight: '10px', width: '60%' }}>
						<h2 style={{ fontWeight: 'normal', margin: '5px' }}>How to Win Friends & Influence People</h2>
						<div style={{ display: 'flex' }}>
							<RatingStar />{' '}
							<a href="#" style={{ fontSize: '18px', marginLeft: '5px', textDecoration: 'none' }}>
								(20 comments)
							</a>
						</div>
						<h4 style={{ fontWeight: '400', margin: '5px' }}>
							Author: <span style={{ color: 'blue' }}>Dale Canegie</span>
						</h4>
						<Divider />
						<h3
							style={{
								fontWeight: '500',
								margin: '5px',
								textDecoration: 'line-through',
								color: 'red'
							}}
						>
							Marker Price: $120
						</h3>
						<h3 style={{ fontWeight: '600', margin: '5px', color: 'green' }}>NQBook's Price: $100</h3>
						<h4 style={{ fontWeight: 'bold', margin: '5px' }}>
							Introduce:{' '}
							<span style={{ fontWeight: 'normal' }}>
								How to Win Friends and Influence People is a self-help book written by Dale Carnegie,
								published in 1936. Over 15 million copies have been sold worldwide, making it one of the
								best-selling books of all time. In 2011, it was number 19 on Time Magazine's list of the
								100 most influential books.
							</span>
						</h4>
						<Divider />
						<div style={{ height: '28px' }}>
							<span>
								<button style={{ width: '24px', height: '100%' }}>+</button>
							</span>
							<span>
								<input style={{ width: '24px', height: '24px', padding: '0' }} />
							</span>
							<span>
								<button style={{ width: '24px', height: '100%' }}>-</button>
							</span>
						</div>
						<Button
							color="primary"
							variant="contained"
							startIcon={<ShoppingCartIcon />}
							className={classes.itemAppbar}
							size="large"
						>
							Add to Cart
						</Button>
						<Button
							color="secondary"
							variant="contained"
							startIcon={<ShoppingCartIcon />}
							className={classes.itemAppbar}
							size="large"
						>
							Buy Now
						</Button>
						{/* <Typography variant="h6" style={{ fontWeight: 'bolder' }} component="p">
							Price: 100$
						</Typography> */}
					</div>
				</div>
				{/* <Grid container direction="row" spacing={2}>
					<Grid item xs={4}>
						
					</Grid>
					<div className={classes.vl} />
					<Grid item xs={8}>
						<h3>Visit us</h3>
						<p>
							<a className={classes.aFooter} href="">
								227 Nguyen Van Cu, Ward 4, District 5, Ho Chi Minh city
							</a>
						</p>
					</Grid>
				</Grid> */}
			</div>
			<div
				style={{
					display: 'block',
					backgroundColor: 'white',
					height: '80vh',
					marginTop: '10px',
					marginBottom: '10px'
				}}
			/>
		</Container>
	);
};

export default withStyles(styles)(BookDetail);
