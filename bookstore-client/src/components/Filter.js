import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	filterTitle: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		// color: '#00D0E5',
		marginBottom: '15px'
	},
	filterItem: {
		marginLeft: '10px',
		marginTop: '0',
		marginBottom: '0'
	},
	aItem: {
		color: 'black',
		textDecoration: 'none',
		'&:hover': {
			cursor: 'pointer',
			color: '#C6C6C6'
		}
	}
});

const Filter = ({ classes, filterTiltle, listFilterItem }) => {
	const ListFilterItem = () => {
		let list = [];
		listFilterItem.forEach((item) => {
			list.push(
				<p className={classes.filterItem}>
					<a className={classes.aItem} href="">
						{item}
					</a>
				</p>
			);
		});
		return list;
	};

	return (
		<Fragment>
			<h3 className={classes.filterTitle}>{filterTiltle}</h3>
			<ListFilterItem />
			<Divider style={{ marginTop: '10px' }} />
		</Fragment>
	);
};

export default withStyles(styles)(Filter);
