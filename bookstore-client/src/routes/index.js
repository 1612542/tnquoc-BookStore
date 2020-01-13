import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Home from '../pages/home';
import BookInfo from '../pages/book-info';
// import LoginView from '../pages/login';

const Routes = [
	<Route key="rec_0" exact path="/" render={() => <Redirect to="/home" />} />,
	<Route key="home" exact path="/home" component={Home} />,
	<Route key="categories" exact path="/books" component={BookInfo} />,
	// <Route key="login" exact path="/login" component={LoginView} />
];

export default Routes;
