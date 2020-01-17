import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const BookDetailData = {
	id: 1,
	name: 'How to Win Friends & Influence People',
	author: 'Dale Canegie',
	publisher: 'Simon and Schuster',
	publicationDate: 'October - 1936',
	language: 'English',
	size: '14 x 20.5 cm',
	pages: 215
};

const styles = () => ({
	table: {
		fontFamily: 'arial, sans-serif',
		width: '100%',
		border: '1px solid grey',
		borderCollapes: 'collapse',
		marginTop: '15px'
	},
	trStyling: {
		height: '40px'
	},
	firstCol: {
		backgroundColor: '#F2F2F2',
		width: '30%',
		heigth: '50px',
		paddingLeft: '15px',
		fontWeight: '600'
	},
	secondCol: {
		paddingLeft: '15px'
	}
});

const TableDetail = ({ book, classes }) => {
	return (
		<table className={classes.table} rules="all">
			<tbody>
				<tr className={classes.trStyling}>
					<td className={classes.firstCol}>Name</td>
					<td className={classes.secondCol}>{book.bookName}</td>
				</tr>
				<tr className={classes.trStyling}>
					<td className={classes.firstCol}>Author</td>
					<td className={classes.secondCol}>{book.author}</td>
				</tr>
				<tr className={classes.trStyling}>
					<td className={classes.firstCol}>Publisher</td>
					<td className={classes.secondCol}>{book.publisher}</td>
				</tr>
				<tr className={classes.trStyling}>
					<td className={classes.firstCol}>Publication Date</td>
					<td className={classes.secondCol}>{book.publisherDate}</td>
				</tr>
				<tr className={classes.trStyling}>
					<td className={classes.firstCol}>Language</td>
					<td className={classes.secondCol}>{book.languages}</td>
				</tr>
				<tr className={classes.trStyling}>
					<td className={classes.firstCol}>Size</td>
					<td className={classes.secondCol}>{book.size}</td>
				</tr>
				<tr className={classes.trStyling}>
					<td className={classes.firstCol}>Pages</td>
					<td className={classes.secondCol}>{book.pages}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default withStyles(styles)(TableDetail);
