import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { withStyles } from '@material-ui/core/styles';

import TitleWithStyle from './TitleWithStyle';

const styles = () => ({
	centerDiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	rightButton: {},
	leftButton: {
		transform: 'scaleX(-1)'
	},
	stylingIcon: {
		height: '40px',
		width: '40px'
	}
});

const BookCarousel = ({ classes, data, title }) => {
	const [ index, setIndex ] = useState(0);

	const movePrev = () => {
		setIndex((prevId) => prevId - 1);
	};

	const moveNext = () => {
		setIndex((prevId) => prevId + 1);
	};

	const RenderActiveItem = () => {
		let temp = [];
		for (let i = index; i < index + 4; i++) {
			temp.push(
				<Grid item xs key={i}>
					{data[i]}
				</Grid>
			);
		}
		return temp;
	};

	return (
		<div>
			<TitleWithStyle title={title} />
			<Grid container direction="row" spacing={0}>
				<Grid item xs={1}>
					<div className={classes.centerDiv}>
						<IconButton
							disabled={index === 0}
							className={classes.leftButton}
							onClick={movePrev}
							color="secondary"
						>
							<PlayCircleOutlineIcon className={classes.stylingIcon} />
						</IconButton>
					</div>
				</Grid>
				<Grid item xs={10}>
					<Grid container dicrection="row" spacing={0}>
						<RenderActiveItem />
					</Grid>
				</Grid>
				<Grid item xs={1}>
					<div className={classes.centerDiv}>
						<IconButton
							disabled={index === data.length - 4 || data.length < 4}
							className={classes.rightButton}
							onClick={moveNext}
							color="secondary"
						>
							<PlayCircleOutlineIcon className={classes.stylingIcon} />
						</IconButton>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default withStyles(styles)(BookCarousel);
