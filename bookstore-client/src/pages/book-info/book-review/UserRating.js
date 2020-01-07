import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';

import RatingStar from '../../../components/RatingStar';

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
	}
});

const UserRating = ({ classes, outputColor }) => {
	return (
		<div>
			<img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="" width="60px" height="60px" />
			<div style={{ color: outputColor }}>abababa</div>
			<div style={{ display: 'flex' }}>
				<div style={{ fontSize: '18px' }}>User Rating</div>
				<div style={{ marginLeft: '5px' }}>
					<RatingStar starValue={4.1} />
				</div>
			</div>
			<div className={classes.text}>4.2 average based on 20 reviews</div>

			<table style={{ borderCollapse: 'collapse' }}>
				<tbody>
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
				</tbody>
			</table>
		</div>
	);
};

export default withStyles(styles)(UserRating);
