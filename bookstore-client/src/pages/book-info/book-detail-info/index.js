import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import TableDetail from './table-detail';

const styles = () => ({
	divStyling: {
		display: 'block',
		backgroundColor: 'white',
		height: '350px',
		marginTop: '10px',
		marginBottom: '20px',
		width: '700px',
		padding: '10px 10px'
	},
	temp: {
		margin: 0,
		fontWeight: '500'
	}
});

const BookDetailInfo = ({ classes }) => {
	return (
		<div className={classes.divStyling}>
			<h2 className={classes.temp}>Book Details</h2>
			<TableDetail />
		</div>
	);
};

export default withStyles(styles)(BookDetailInfo);
