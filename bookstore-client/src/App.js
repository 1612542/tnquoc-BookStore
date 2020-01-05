import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import Appbar from './components/AppBar';
import Footer from './components/Footer';
import HomeMainContent from './components/HomeMainContent';
import HomeSideBar from './components/HomeSideBar';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const styles = () => ({
	root: {
		// backgroundColor: '#F7F7F6'
		backgroundColor: '#F2F2F2'
	},
	vl: {
		display: 'block',
		width: '2px',
		backgroundColor: '#E5E5E5',
		height: '320vh'
	},
	centerDiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	}
});

const App = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Appbar />
			<Container style={{ width: '80%' }}>
				<div style={{ display: 'block', backgroundColor: 'white', height: '320vh' }}>
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
			<Footer />
		</div>
	);
};

export default withStyles(styles)(App);
