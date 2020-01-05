import React, { Fragment, useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import { withStyles } from '@material-ui/core/styles';

const imageSrc = [
	'https://traveler.marriott.com/wp-content/uploads/2015/04/Maple_Street_Bookstore-_Marriot_6622.jpg',
	'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_660,h_440/https://discoverpods.com/wp-content/uploads/2019/12/books-3473196_1920-660x440.jpg',
	'https://miro.medium.com/max/560/0*NP1wzKrbYzjnIN3g.png',
	'https://bornrealist.com/wp-content/uploads/2018/07/books.jpg',
	'https://www.montanacollegefairs.com/uploads/1/7/0/6/17069952/8543281_orig.jpg',
	'http://cdn.shopify.com/s/files/1/0189/8074/files/thanksgiving_online_promotion_v2_fb_large.png?2819404939116794835',
	'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
];

const styles = () => ({
	centerDiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	styleImg: {
		minWidth: '100%',
		maxWidth: '600px',
		height: '350px',
		WebkitAnimationName: 'fade',
		WebkitAnimationDuration: '1.5s',
		AnimationName: 'fade',
		AnimationDuration: '1.5s'
	},
	rightButton: {},
	leftButton: {
		transform: 'scaleX(-1)'
	},
	next: {
		position: 'absolute',
		right: 0,
		top: '40%'
	},
	prev: {
		position: 'absolute',
		top: '40%',
		transform: 'scaleX(-1)'
	},
	dot: {
		cursor: 'pointer',
		height: '13px',
		width: '13px',
		margin: '0 3px',
		backgroundColor: '#bbb',
		borderRadius: '50%',
		display: 'inline-block',
		transition: 'background-color 0.6s ease'
	},
	dotActive: {
		backgroundColor: '#FF0800',
		cursor: 'pointer',
		height: '13px',
		width: '13px',
		margin: '0 3px',
		borderRadius: '50%',
		display: 'inline-block',
		transition: 'background-color 0.6s ease'
	},
	dotDiv: {
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		bottom: 5,
		backgroundColor: 'black',
		opacity: '0.5'
	}
});

const AdSlideShow = ({ classes }) => {
	const [ index, setIndex ] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => setIndex((prevId) => (prevId === imageSrc.length - 1 ? 0 : prevId + 1)), 3000);
		return () => clearInterval(timer);
	}, []);

	const movePrev = () => {
		setIndex((prevId) => (prevId === 0 ? imageSrc.length - 1 : prevId - 1));
	};

	const moveNext = () => {
		setIndex((prevId) => (prevId === imageSrc.length - 1 ? 0 : prevId + 1));
	};

	const DotSlideShow = () => {
		let dots = [];
		for (let i = 0; i < imageSrc.length; i++) {
			dots.push(<span className={i === index ? classes.dotActive : classes.dot} />);
		}
		return dots;
	};

	// return (
	// 	<Fragment>
	// 		<Grid container direction="row" spacing={0}>
	// 			<Grid item xs>
	// 				<div className={classes.centerDiv}>
	// 					<div>
	// 						<IconButton
	// 							disabled={index === 0}
	// 							onClick={movePrev}
	// 							edge="end"
	// 							className={classes.leftButton}
	// 							color="primary"
	// 						>
	// 							<PlayCircleFilledRoundedIcon style={{ height: '40px', width: '40px' }} />
	// 						</IconButton>
	// 					</div>
	// 				</div>
	// 			</Grid>
	// 			<Grid item xs={10}>
	// 				<img src={imageSrc[index]} className={classes.styleImg} />
	// 			</Grid>
	// 			<Grid item xs>
	// 				<div className={classes.centerDiv}>
	// 					<div>
	// 						<IconButton
	// 							disabled={index === imageSrc.length - 1}
	// 							onClick={moveNext}
	// 							edge="start"
	// 							className={classes.rightButton}
	// 							color="primary"
	// 						>
	// 							<PlayCircleFilledRoundedIcon style={{ height: '40px', width: '40px' }} />
	// 						</IconButton>
	// 					</div>
	// 				</div>
	// 			</Grid>
	// 		</Grid>
	// 	</Fragment>
	// );

	return (
		<div style={{ position: 'relative' }}>
			<div>
				<img src={imageSrc[index]} className={classes.styleImg} />
			</div>
			<IconButton className={classes.prev} onClick={movePrev} color="secondary">
				<ArrowForwardIosIcon style={{ height: '40px', width: '40px' }} />
			</IconButton>
			<IconButton onClick={moveNext} className={classes.next} color="secondary">
				<ArrowForwardIosIcon style={{ height: '40px', width: '40px' }} />
			</IconButton>
			<div className={classes.dotDiv}>
				<DotSlideShow />
			</div>
		</div>
	);
};

export default withStyles(styles)(AdSlideShow);
