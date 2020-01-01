import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Appbar from './components/AppBar';
import BookCard from './components/BookCard';

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
							<div id="sidebar" style={{ paddingLeft: '10px', paddingRight: '10px', width: '20%' }} />
							<div className={classes.vl} />
							<div id="mainContent" style={{ paddingLeft: '10px' }}>
								<Fragment>
									<Grid container direction="row" spacing={2}>
										<Grid item xs>
											<BookCard />
										</Grid>
										<Grid item xs>
											<BookCard />
										</Grid>
										<Grid item xs>
											<BookCard />
										</Grid>
										<Grid item xs>
											<BookCard />
										</Grid>
									</Grid>
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
