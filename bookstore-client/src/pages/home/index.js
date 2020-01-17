import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import Appbar from '../../components/AppBar';
import Footer from '../../components/Footer';
import TabRoutes from '../../components/TapRoute';
import HomeSideBar from './HomeSideBar';
import HomeMainContent from './HomeMainContent';

const styles = () => ({
	vl: {
		display: 'block',
		width: '2px',
		backgroundColor: '#E5E5E5',
		// height: '380vh'
		height: '2500px'
	},
	centerDiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	myContainer: {
		width: '1100px'
		// minWidth: '1084px',
		// maxWidth: '85%'
	}
});

const Home = ({ classes, ...props }) => {
	const [ books, setBooks ] = useState([]);
	const token = (props.location.state && props.location.state.token) || '';
	console.log(token);

	useEffect(() => {
		axios
			.get('http://localhost:8080/home')
			.then((res) => {
				setBooks(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Appbar token={token} />
			<TabRoutes />
			<Container className={classes.myContainer}>
				<div style={{ display: 'block', backgroundColor: 'white', height: '2500px', marginTop: '15px' }}>
					<div style={{ display: 'flex' }}>
						<div id="sidebar" style={{ paddingLeft: '10px', paddingRight: '10px', width: '30%' }}>
							<HomeSideBar />
						</div>
						<div className={classes.vl} />
						<div id="mainContent">
							<HomeMainContent data={books} />
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default withStyles(styles)(Home);
