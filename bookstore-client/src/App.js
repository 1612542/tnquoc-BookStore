import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

import Appbar from './components/AppBar';
import Footer from './components/Footer';
import Home from './pages/home';
import BookDetail from './pages/book-info';

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
		<div className={classes.root}>
			<Appbar />
			{/* <Home /> */}
			<BookDetail />
			<Footer />
		</div>
	);
};

export default withStyles(styles)(App);
