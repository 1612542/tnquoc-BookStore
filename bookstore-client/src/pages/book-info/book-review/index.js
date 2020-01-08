import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import DynamicratingStar from './DynamicRatingStar';
import TitleWithStyle from '../../../components/TitleWithStyle';
import UserRating from './UserRating';

const styles = () => ({
	containerDiv: {
		backgroundColor: 'white',
		height: '300px',
		width: '100%',
		padding: '10px 20px',
		marginBottom: '20px'
	},
	centerDiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
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

const BookReview = ({ classes }) => {
	return (
		<div className={classes.containerDiv}>
			<TitleWithStyle title={'Customer Reviews'} />
			<UserRating outputColor={'green'} />
		</div>
	);
};

export default withStyles(styles)(BookReview);
