import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Appbar from './components/AppBar';
import RowOfBookCard from './components/RowOfBookCard';
import AdSlideShow from './components/AdSlideShow';

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
		height: '200vh'
	}
});

const App = ({ classes }) => {
	return (
		<div>
			<div className={classes.root}>
				<Appbar />
				<Container style={{ width: '80%' }}>
					{/* <Typography component="div" style={{ backgroundColor: 'white', height: '100vh' }} /> */}
					<div style={{ display: 'block', backgroundColor: 'white', height: '200vh' }}>
						<div style={{ display: 'flex' }}>
							<div id="sidebar" style={{ paddingLeft: '10px', paddingRight: '10px', width: '25%' }} />
							<div className={classes.vl} />
							<Divider orientation="vertical" />
							<div id="mainContent">
								<Fragment>
									<div id="slideshow" style={{ marginBottom: '10px', marginTop: '5px' }}>
										<AdSlideShow />
									</div>
									<RowOfBookCard />
									<RowOfBookCard />
									<RowOfBookCard />
								</Fragment>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default withStyles(styles)(App);
