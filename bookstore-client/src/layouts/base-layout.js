import React, { Fragment } from 'react';

import Appbar from '../components/AppBar';
import Footer from '../components/Footer';
import TabRoute from '../components/TapRoute';

const BaseLayout = ({ Component }) => {
	return (
		<Fragment>
			<Appbar />
			<TabRoute />
			{Component}
			<Footer />
		</Fragment>
	);
};

export default BaseLayout;
