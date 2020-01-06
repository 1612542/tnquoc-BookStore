import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	titleOfItem: {
		marginBottom: '2px',
		marginTop: '0'
	},
	btnControlAmount: {
		width: '34px',
		height: '34px'
	},
	inputControlAmount: {
		width: '30px',
		height: '30px',
		padding: '0',
		textAlign: 'center'
	},
	divToolbar: {
		display: 'flex',
		width: '100%',
		padding: 10
	},
	divItem: {
		marginLeft: '10px',
		marginRight: '5px'
	},
	btnToolbar: {
		backgroundColor: '#051042',
		color: 'white'
	}
});

const BuyToolBar = ({ classes }) => {
	const [ amount, setAmount ] = useState(1);

	const increaseAmount = () => {
		setAmount((prevAmount) => prevAmount + 1);
	};

	const decreaseAmount = () => {
		setAmount((prevAmount) => (prevAmount === 1 ? 1 : prevAmount - 1));
	};

	const ControlAmount = () => {
		return (
			<div>
				<p className={classes.titleOfItem}>Amount:</p>
				<span>
					<button className={classes.btnControlAmount} onClick={decreaseAmount}>
						-
					</button>
				</span>
				<span>
					<input
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						className={classes.inputControlAmount}
					/>
				</span>
				<span>
					<button className={classes.btnControlAmount} onClick={increaseAmount}>
						+
					</button>
				</span>
			</div>
		);
	};

	return (
		<div className={classes.divToolbar}>
			<ControlAmount />
			<div className={classes.divItem}>
				<p className={classes.titleOfItem}>&nbsp;</p>
				<Button
					variant="contained"
					startIcon={<ShoppingCartIcon />}
					className={classes.btnToolbar}
					size="medium"
				>
					Add to Cart
				</Button>
			</div>
			<div className={classes.divItem}>
				<p className={classes.titleOfItem}>&nbsp;</p>
				<Button
					variant="contained"
					startIcon={<AssignmentTurnedInIcon />}
					className={classes.btnToolbar}
					size="medium"
				>
					Buy now
				</Button>
			</div>
		</div>
	);
};

export default withStyles(styles)(BuyToolBar);
