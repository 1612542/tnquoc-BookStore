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

const RatingStar = ({ classes }) => {
	return (
		<div>
			<span>
				<StarIcon className={classes.activeStar} />
			</span>
			<span>
				<StarIcon className={classes.activeStar} />
			</span>
			<span>
				<StarIcon className={classes.activeStar} />
			</span>
			<span>
				<StarIcon className={classes.activeStar} />
			</span>
			<span>
				<StarIcon className={classes.disabledStar} />
			</span>
		</div>
	);
};

export default withStyles(styles)(RatingStar);
