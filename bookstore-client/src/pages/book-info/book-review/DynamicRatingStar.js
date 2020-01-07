import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	activeStar: {
		color: 'yellow'
	},
	disabledStar: {
		color: '#C6C6C6'
	}
});

const DynamicRatingStar = ({ classes }) => {
	const Rating = () => {
		const [ rating, setRating ] = useState(null);
		const [ tempRating, setTempRating ] = useState(null);

		const rate = (t_rating) => {
			setRating(t_rating);
			setTempRating(t_rating);
		};

		const starOver = (t_rating) => {
			let temp = rating;
			setRating(t_rating);
			setTempRating(temp);
		};

		const starOut = () => {
			setRating(tempRating);
		};

		const Stars = () => {
			var stars = [];
			for (let i = 0; i < 5; i++) {
				var kclass = classes.disabledStar;
				if (rating >= i && rating !== null) kclass = classes.activeStar;
				stars.push(
					<label
						key={i}
						className={kclass}
						onClick={() => {
							rate(i);
						}}
						onMouseOver={() => starOver(i)}
						onMouseOut={starOut}
					>
						<StarIcon />
					</label>
				);
			}
			return <div>{stars}</div>;
		};

		return <Stars />;
	};

	return (
		<div>
			<Rating />
		</div>
	);
};

export default withStyles(styles)(DynamicRatingStar);
