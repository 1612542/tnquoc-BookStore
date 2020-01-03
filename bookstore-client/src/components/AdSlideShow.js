import React, { Fragment, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
// import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

const imageSrc = [
	'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fwallpapers%2Fnature%2Fsummer&psig=AOvVaw3uMXDHaO9nJ26BOn0T80MV&ust=1578073334683000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj4mbm75eYCFQAAAAAdAAAAABAD',
	'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fsummer%2F&psig=AOvVaw3uMXDHaO9nJ26BOn0T80MV&ust=1578073334683000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj4mbm75eYCFQAAAAAdAAAAABAI',
	'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fsummer-background-design_1028216.htm&psig=AOvVaw3uMXDHaO9nJ26BOn0T80MV&ust=1578073334683000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj4mbm75eYCFQAAAAAdAAAAABAN'
];

const styles = () => ({
	centerDiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	styleImg: {
		width: '100%',
		height: '300px'
	},
	rightButton: {},
	leftButton: {
		transform: 'scaleX(-1)'
	}
});

const AdSlideShow = ({ classes }) => {
	const [ index, setIndex ] = useState(0);

	// const moveNext=

	return (
		<Fragment>
			<Grid container direction="row" spacing={0}>
				<Grid item xs>
					<div className={classes.centerDiv}>
						<div>
							<IconButton edge="end" className={classes.leftButton} color="primary" aria-label="menu">
								<PlayCircleFilledRoundedIcon style={{ height: '40px', width: '40px' }} />
							</IconButton>
						</div>
					</div>
				</Grid>
				<Grid item xs={10}>
					<img
						src="https://image.freepik.com/free-vector/summer-background-design_1314-42.jpg"
						className={classes.styleImg}
					/>
				</Grid>
				<Grid item xs>
					<div className={classes.centerDiv}>
						<div>
							<IconButton
								// disabled
								onClick={() => console.log('abc')}
								edge="start"
								className={classes.rightButton}
								color="primary"
								aria-label="menu"
							>
								<PlayCircleFilledRoundedIcon style={{ height: '40px', width: '40px' }} />
							</IconButton>
						</div>
					</div>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default withStyles(styles)(AdSlideShow);
