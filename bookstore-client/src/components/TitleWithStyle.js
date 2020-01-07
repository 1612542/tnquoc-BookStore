import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	divTitle: {
		width: '200px',
		textAlign: 'center',
		backgroundColor: '#051042',
		height: '30px',
		verticalAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		fontWeight: 'bold'
	}
});

const TitleWithStyle = ({ classes, title }) => {
	return (
		<div>
			<div className={classes.divTitle}>
				<p style={{ margin: 'auto' }}>{title}</p>
			</div>
			<hr style={{ borderTop: '2px solid #051042', margin: 0 }} />
		</div>
	);
};

export default withStyles(styles)(TitleWithStyle);
