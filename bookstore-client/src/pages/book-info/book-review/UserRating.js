import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';

import RatingStar from '../../../components/RatingStar';
import DynamicRatingStar from './DynamicRatingStar';

const styles = () => ({
	activeStar: {
		color: 'yellow'
	},
	barContainer: {
		height: '20px',
		width: '100%',
		backgroundColor: '#f1f1f1',
		textAlign: 'center',
		color: 'white',
		borderRadius: '5px',
		display: 'block'
	},
	tilteStar: {
		display: 'flex',
		width: '100px'
	},
	text: {
		fontSize: '18px'
	},
	tdStarBar: {
		width: '300px',
		height: '30px'
	},
	vl: {
		display: 'block',
		width: '2px',
		backgroundColor: '#E5E5E5',
		height: '230px'
	},
	btnToolbar: {
		backgroundColor: '#051042',
		color: 'white',
		'&:hover': {
			backgroundColor: 'orange'
		}
	}
});

const UserRating = ({ classes, outputColor }) => {
	const TableRating = () => {
		let temp = [];
		for (let i = 5; i >= 1; i--) {
			temp.push(
				<tr>
					<td>
						<div className={classes.tilteStar}>
							<div className={classes.text}>5</div>
							<div style={{ marginLeft: '5px' }}>
								<StarIcon className={classes.activeStar} />
							</div>
						</div>
					</td>
					<td className={classes.tdStarBar}>
						<div className={classes.barContainer}>
							<div style={{ width: '50%', backgroundColor: 'green', height: '100%' }} />
						</div>
					</td>
					<td style={{ paddingLeft: '25px' }}>
						<div className={classes.text}>5</div>
					</td>
				</tr>
			);
		}
		return temp;
	};

	return (
		<div style={{ display: 'flex', paddingTop: '15px' }}>
			<div style={{ width: '50%', height: '230px' }}>
				<div style={{ display: 'flex' }}>
					<div style={{ fontSize: '18px', fontWeight: '800' }}>User Rating</div>
					<div style={{ marginLeft: '5px' }}>
						<RatingStar starValue={4.1} />
					</div>
				</div>
				<div>4.2 average based on 20 reviews</div>
				<br />
				<table style={{ borderCollapse: 'collapse' }}>
					<tbody>
						<TableRating />
					</tbody>
				</table>
			</div>
			<div className={classes.vl} />
			<div style={{ paddingLeft: '20px' }}>
				<form>
					<div style={{ fontSize: '18px', fontWeight: '800', marginBottom: '5px' }}>Your Rating</div>
					<DynamicRatingStar />
					<div style={{ fontSize: '18px', fontWeight: '800', marginBottom: '5px' }}>Your Comment</div>
					<div style={{ display: 'flex' }}>
						<div>
							<img
								src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
								alt=""
								width="60px"
								height="60px"
							/>
						</div>
						<textarea style={{ marginLeft: '10px' }} rows="4" cols="60" />
					</div>
					<br />
					<Button variant="contained" startIcon={<SendIcon />} className={classes.btnToolbar} size="medium">
						Post Review
					</Button>
				</form>
			</div>
		</div>
	);
};

export default withStyles(styles)(UserRating);
