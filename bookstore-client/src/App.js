import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

import Appbar from './components/AppBar';
import Footer from './components/Footer';
import TabRoute from './components/TapRoute';
import routes from './routes';

import Login from './pages/login';

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
	}
});

const App = ({ classes }) => {
	return (
		<Router>
			<div className={classes.root}>
				{/* <Login /> */}
				{/* <Appbar />
				<TabRoute /> */}
				<Switch>{routes}</Switch>
				{/* <Footer /> */}
			</div>
		</Router>
	);
};

export default withStyles(styles)(App);
