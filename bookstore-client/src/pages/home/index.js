import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import HomeSideBar from './HomeSideBar';
import HomeMainContent from './HomeMainContent';

const styles = () => ({
	vl: {
		display: 'block',
		width: '2px',
		backgroundColor: '#E5E5E5',
		height: '380vh'
	},
	centerDiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	myContainer: {
		// width: '85%',
		minWidth: '1084px',
		maxWidth: '85%'
	}
});

const Home = ({ classes }) => {
	return (
		<Container className={classes.myContainer}>
			<div style={{ display: 'block', backgroundColor: 'white', height: '380vh' }}>
				<div style={{ display: 'flex' }}>
					<div id="sidebar" style={{ paddingLeft: '10px', paddingRight: '10px', width: '30%' }}>
						<HomeSideBar />
					</div>
					<div className={classes.vl} />
					<div id="mainContent">
						<HomeMainContent />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default withStyles(styles)(Home);
