import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, withStyles } from '@material-ui/core/styles';

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
		width: '1100px'
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
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2)
	},
	aAppbar: {
		textDecoration: 'none',
		color: 'white',
		'&:hover': {
			color: 'green'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 200,
			'&:focus': {
				width: 250
			}
		}
	},
	linkStyling: {
		textDecoration: 'none'
	}
});

const Appbar = ({ classes, token }) => {
	return (
		<AppBar position="static" className={classes.appbarRoot}>
			<Container className={classes.myContainer}>
				<Toolbar className={classes.myToolbar}>
					<Link to="/" className={classes.linkStyling}>
						<img src="/NQBook.png" className={classes.stylingImg} />
					</Link>
					<div style={{ width: '100%' }}>
						<div style={{ display: 'block', float: 'right' }}>
							<Toolbar className={classes.myToolbar}>
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<SearchIcon />
									</div>
									<InputBase
										placeholder="Search…"
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput
										}}
										inputProps={{ 'aria-label': 'search' }}
									/>
								</div>
								<Button
									color="inherit"
									variant="outlined"
									startIcon={<ShoppingCartIcon />}
									className={classes.itemAppbar}
								>
									Cart
								</Button>
								{token ? (
									<PersonIcon />
								) : (
									<Button
										component={Link}
										to={`login`}
										onClick={(e) => e.stopPropagation()}
										color="inherit"
										variant="outlined"
										startIcon={<PersonIcon />}
									>
										Login
									</Button>
								)}
							</Toolbar>
						</div>
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default withStyles(styles)(Appbar);
