import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	bg: {
		backgroundImage:
			'url(${https://content.fortune.com/wp-content/uploads/2015/11/screen-shot-2015-11-03-at-7-04-13-am.png})',
		height: '100%',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	},
	dotDiv: {
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		// bottom: 5,
		backgroundColor: 'black',
		opacity: '0.5'
	},
	divLogin: {
		textAlign: 'center',
		position: 'absolute',
		width: '500px',
		height: '500px',
		top: 0
	},
	centerDiv: {
		top: 0,
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '80%',
		width: '100%'
	},
	card: {
		height: '400px',
		width: '400px',
		padding: 0
	},
	imgCard: {
		width: '70%',
		height: '50px'
  },
  btnToolbar: {
		backgroundColor: '#051042',
		color: 'white',
		'&:hover': {
			backgroundColor: 'orange'
		}
	}
});

const Login = ({ classes }) => {
	const [ userName, setUserName ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<div style={{ position: 'relative' }}>
			<img
				src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1493058170/articles/2011/10/12/america-s-greatest-independent-bookstores-and-why-they-should-survive/independent-bookstores-fountain-books_ocfbpl"
				width="100%"
				height="100%"
			/>
			<div className={classes.dotDiv} />
			<div className={classes.centerDiv}>
				<form>
					<Card className={classes.card} elevation={0}>
						<CardContent style={{ padding: 0 }}>
							<div
								style={{
									textAlign: 'center',
									backgroundColor: '#051042',
									paddingTop: '10px',
									paddingBottom: '5px'
								}}
							>
								<img alt="" src="/NQBook.png" className={classes.imgCard} />
							</div>
							<div style={{ padding: '20px 20px', textAlign: 'center' }}>
								<p
									style={{
										margin: 0,
										textAlign: 'center',
										fontSize: '30px',
										color: 'blue',
										fontWeight: 'bold'
									}}
								>
									Sign in
								</p>
								<TextField required style={{ width: '100%', marginTop: ' 10px' }} label="User name" value={userName} onChange={e=>setUserName(e.target.value)} />
								<TextField
									required
									style={{ width: '100%', marginTop: ' 20px' }}
									label="Password"
                  type="password"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
								/>
								<div
									style={{
										marginTop: '15px'
									}}
								>
									<a
										href=""
										style={{
											textDecoration: 'none',
											fontWeight: 'bold',
											color: 'skyblue'
										}}
									>
										Create a new account
									</a>
								</div>
							</div>
						</CardContent>
						<div style={{ padding: '5px 20px', textAlign: 'right' }}>
							<Button size="medium" variant="contained" style={{ marginRight: '10px' }}>
								Cancel
							</Button>
							<Button className={classes.btnToolbar} size="medium" variant="contained" color="primary" disabled={!userName || !password}>
								Login
							</Button>
						</div>
					</Card>
				</form>
			</div>
		</div>
	);
};

export default withStyles(styles)(Login);
