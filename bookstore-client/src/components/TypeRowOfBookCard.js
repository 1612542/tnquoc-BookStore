import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import RowOfBookCard from './RowOfBookCard';

const styles = () => ({
	divTitle: {
		paddingLeft: '10px',
		paddingRight: '10px',
		marginTop: '5px',
		marginBottom: '5px'
	},
	stylingDivide: {
		paddingLeft: '10px',
		paddingRight: '10px'
	},
	noMargin: {
		margin: 0
	}
});

const TypeRowOfBookCard = ({ classes, title }) => {
	return (
		<Fragment>
			<div className={classes.divTitle}>
				<Grid container direction="row" spacing={0}>
					<Grid item xs>
						<h3 className={classes.noMargin}>{title}</h3>
					</Grid>
					<Grid item xs>
						<div style={{ width: '100%', textAlign: 'right' }}>
							<a href="" style={{ textDecoration: 'none', color: 'blue' }}>
								See more >
							</a>
						</div>
					</Grid>
				</Grid>
			</div>
			<Divider className={classes.stylingDivide} />
			<RowOfBookCard />
		</Fragment>
	);
};

export default withStyles(styles)(TypeRowOfBookCard);
