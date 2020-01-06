import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	appbarRoot: {
		backgroundColor: '#051042'
		// backgroundColor: '#00B9DE'
	},
	myToolbar: {
		paddingLeft: '0',
		paddingRight: '0',
		height: '80px'
	},
	myContainer: {
		width: '1100px',
		// minWidth: '1084px',
		// maxWidth: '85%'
	},
	stylingImg: {
		// width: '130px',
		// height: '30px'
		minWidth: '250px',
		maxWidth: '300px',
		maxHeight: '50px'
	},
	itemAppbar: {
		// marginLeft: '10px',
		// marginRight: '10px'
		marginLeft: theme.spacing.unit * 2,
		marginRight: theme.spacing.unit * 2
	},
	aAppbar: {
		textDecoration: 'none',
		color: 'white',
		'&:hover': {
			color: 'green'
		}
	}
});

const Appbar = ({ classes }) => {
	return (
		<AppBar position="static" className={classes.appbarRoot}>
			<Container className={classes.myContainer}>
				<Toolbar className={classes.myToolbar}>
					<img src="/NQBook.png" className={classes.stylingImg} />
					<div style={{ width: '100%' }}>
						<div style={{ display: 'block', float: 'right' }}>
							<Toolbar className={classes.myToolbar}>
								<Typography variant="h6" className={classes.itemAppbar}>
									<a href="#" className={classes.aAppbar}>
										Bookstore
									</a>
								</Typography>
								<Typography variant="h6" className={classes.itemAppbar}>
									<a href="#" className={classes.aAppbar}>
										Events
									</a>
								</Typography>
								<Typography variant="h6" className={classes.itemAppbar}>
									<a href="#" className={classes.aAppbar}>
										About
									</a>
								</Typography>
								<Button
									color="inherit"
									variant="outlined"
									startIcon={<ShoppingCartIcon />}
									className={classes.itemAppbar}
								>
									Cart
								</Button>
								<Button color="inherit" variant="outlined" startIcon={<PersonIcon />}>
									Login
								</Button>
							</Toolbar>
						</div>
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default withStyles(styles)(Appbar);
