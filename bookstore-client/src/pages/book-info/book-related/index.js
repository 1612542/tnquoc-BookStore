import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { withStyles } from '@material-ui/core/styles';

import RowOfBookCard from '../../../components/RowOfBookCard';

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

const tempData = [ <RowOfBookCard />, <RowOfBookCard /> ];

const BookRelated = ({ classes }) => {
	const [ index, setIndex ] = useState(0);

	const movePrev = () => {
		setIndex((prevId) => (prevId === 0 ? tempData.length - 1 : prevId - 1));
	};

	const moveNext = () => {
		setIndex((prevId) => (prevId === tempData.length - 1 ? 0 : prevId + 1));
	};

	// const BookSlideShow = () => {
	// 	let books = [];
	// 	for (let i = 0; i < imageSrc.length; i++) {
	// 		book.push(<span className={i === index ? classes.dotActive : classes.dot} />);
	// 	}
	// 	return book;
	// };

	return (
		<div style={{ backgroundColor: 'white', height: '750px', width: '100%', padding: '10px 10px', marginBottom: '10px' }}>
			<div className={classes.divTitle}>
				<p style={{ margin: 'auto' }}>Similar Genres</p>
			</div>
			<hr style={{ borderTop: '2px solid #051042', margin: 0 }} />
			<Grid container direction="row" spacing={0}>
				<Grid item xs={1}>
					<div className={classes.centerDiv}>
						<IconButton className={classes.leftButton} onClick={movePrev} color="secondary">
							<PlayCircleOutlineIcon style={{ height: '40px', width: '40px' }} />
						</IconButton>
					</div>
				</Grid>
				<Grid item xs={10}>
					{/* <RowOfBookCard /> */}
					{tempData[index]}
				</Grid>
				<Grid item xs={1}>
					<div className={classes.centerDiv}>
						<IconButton className={classes.rightButton} onClick={moveNext} color="secondary">
							<PlayCircleOutlineIcon style={{ height: '40px', width: '40px' }} />
						</IconButton>
					</div>
				</Grid>
			</Grid>
			<br />
			<div className={classes.divTitle}>
				<p style={{ margin: 'auto' }}>Similar Author</p>
			</div>
			<hr style={{ borderTop: '2px solid #051042', margin: 0 }} />
			<Grid container direction="row" spacing={0}>
				<Grid item xs={1}>
					<div className={classes.centerDiv}>
						<IconButton className={classes.leftButton} onClick={movePrev} color="secondary">
							<PlayCircleOutlineIcon style={{ height: '40px', width: '40px' }} />
						</IconButton>
					</div>
				</Grid>
				<Grid item xs={10}>
					{/* <RowOfBookCard /> */}
					{tempData[index]}
				</Grid>
				<Grid item xs={1}>
					<div className={classes.centerDiv}>
						<IconButton className={classes.rightButton} onClick={moveNext} color="secondary">
							<PlayCircleOutlineIcon style={{ height: '40px', width: '40px' }} />
						</IconButton>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default withStyles(styles)(BookRelated);
