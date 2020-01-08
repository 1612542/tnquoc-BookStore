import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	appbarRoot: {
		backgroundColor: 'white',
		color: '#051042'
	},
	myContainer: {
		width: '1100px'
	},
	tabText: {
		fontSize: '15px',
		fontWeight: 'bold',
		'&:hover': {
			fontWeight: '700'
		}
	}
});

const tabs = [
	{
		to: '/home',
		label: 'Home'
	},
	{
		to: '/books',
		label: 'Books'
	},
	{
		to: '/about',
		label: 'About'
	}
];

const TabRoute = ({ classes, location: { pathname } }) => {
	const currentTab = tabs.findIndex((tab) => pathname.includes(tab.to));

	return (
		<AppBar position="static" className={classes.appbarRoot}>
			<Container className={classes.myContainer}>
				<Tabs value={currentTab} indicatorColor="primary" aria-label="tab route">
					{tabs.map((tab) => (
						<Tab key={tab.id} className={classes.tabText} component={Link} to={tab.to} label={tab.label} />
					))}
				</Tabs>
			</Container>
		</AppBar>
	);
};

export default withRouter(withStyles(styles)(TabRoute));
