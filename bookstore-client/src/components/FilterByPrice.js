import React, { Fragment } from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	centerDiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	}
});

const FilterByPrice = ({ classes }) => {
	return (
		<Fragment>
			<h3 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Price</h3>
			<form>
				<Grid container direction="row" spacing={0}>
					<Grid item xs={5}>
						<TextField
							label="From"
							variant="outlined"
							style={{ width: '100%', fontSize: '12px' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AttachMoneyIcon style={{ width: '15px', heigth: '15px' }} />
									</InputAdornment>
								)
							}}
						/>
					</Grid>
					<Grid item xs={2}>
						<div className={classes.centerDiv}>
							<div style={{ fontSize: '15px', fontWeight: 'bold' }}>-</div>
						</div>
					</Grid>
					<Grid item xs={5}>
						<TextField
							label="To"
							variant="outlined"
							style={{ width: '100%', fontSize: '12px' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AttachMoneyIcon style={{ width: '15px', heigth: '15px' }} />
									</InputAdornment>
								)
							}}
						/>
					</Grid>
				</Grid>
				<Button color="primary" variant="outlined" style={{ marginTop: '5px', width: '100%' }}>
					OK
				</Button>
			</form>
		</Fragment>
	);
};

export default withStyles(styles)(FilterByPrice);
