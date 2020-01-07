import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	activeStar: {
		color: 'yellow'
	},
	disabledStar: {
		color: '#C6C6C6'
	}
});

const RatingStar = ({ classes, starValue }) => {
	const Stars = () => {
		var stars = [];
		for (let i = 1; i <= 5; i++) {
			var kclass = i <= starValue ? classes.activeStar : classes.disabledStar;
			stars.push(
				<label className={kclass} key={i}>
					<StarIcon />
				</label>
			);
		}
		return <div>{stars}</div>;
	};

	return <Stars />;
};

export default withStyles(styles)(RatingStar);
