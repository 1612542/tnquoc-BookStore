import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import RatingStar from '../../../components/RatingStar';
import BuyToolBar from './buy-toolbar';

const styles = () => ({
	myContainer: {
		width: '1100px'
		// minWidth: '1084px',
		// maxWidth: '85%'
	},
	vl: {
		display: 'block',
		width: '2px',
		backgroundColor: '#E5E5E5',
		height: '350px'
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

const BookGeneralInfo = ({ classes }) => {
	return (
		// <Container className={classes.myContainer}>
			<div style={{ display: 'block', backgroundColor: 'white', height: '350px', marginTop: '10px' }}>
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
						<BuyToolBar />
					</div>
				</div>
			</div>
		// </Container>
	);
};

export default withStyles(styles)(BookGeneralInfo);
