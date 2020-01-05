import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import SocialFollow from './SocialFollow';

const styles = () => ({
	footer: {
		marginTop: '10px',
		display: 'block',
		height: '250px',
		bottom: '0',
		width: '100%',
		// backgroundColor: '#00698D',
		backgroundColor: '#051042',
		color: 'white'
	},
	divFooter: {
		display: 'block',
		height: '250px'
	},
	aFooter: {
		color: 'white',
		textDecoration: 'none'
	}
});

const Footer = ({ classes }) => {
	return (
		<div className={classes.footer}>
			<Container style={{ width: '80%' }}>
				<div className={classes.divFooter}>
					<Grid container direction="row" spacing={2}>
						<Grid item xs>
							<h3>Visit us</h3>
							<p>
								<a className={classes.aFooter} href="">
									227 Nguyen Van Cu, Ward 4, District 5, Ho Chi Minh city
								</a>
							</p>
						</Grid>
						<Grid item xs>
							<h3>Our Store</h3>
							<p>
								<a className={classes.aFooter} href="">
									FAQ
								</a>
							</p>
							<p>
								<a className={classes.aFooter} href="">
									Recruiment
								</a>
							</p>
							<p>
								<a className={classes.aFooter} href="">
									Store aolicy
								</a>
							</p>
							<p>
								<a className={classes.aFooter} href="">
									Payments Methods
								</a>
							</p>
						</Grid>
						<Grid item xs>
							<h3>Contact us</h3>
							<p>Email: nqbook@gmail.com</p>
							<p>Phone: 0123456789 (Mr.Quoc)</p>
						</Grid>
						<Grid item xs>
							<h3>Socials</h3>
							<SocialFollow />
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default withStyles(styles)(Footer);
