import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';

import CustomFilter from './Filter';
import FilterByPrice from './FilterByPrice';
import SpecialBookCard from './SpecialBookCard';

const QuickSearchFilterItems = [ 'All', 'Best Seller', 'Most Read', 'The most rating' ];
const BookCategories = [
	'Action',
	'Adventure',
	'Fiction',
	'Drama',
	'Manga & Comic',
	'Science',
	'Crime & Detective',
	'Music',
	'Sport',
	'Art',
	'Novel',
	'Kids',
	'Computer & Tech',
	'Business'
];

const BookAuthors = [
	'Many Authors',
	'Conan Doyle',
	'J.K.Rowling',
	'Nguyen Nhat Anh',
	'Eiichiro Oda',
	'Gosho Aoyama',
	'John C.Maxwell',
	'Dale Carnegie',
	'Julia Donaldson',
	'Kim Khanh',
	'DK Travel'
];

const SideBar = () => {
	return (
		<Fragment>
			<CustomFilter filterTiltle={'Quick search'} listFilterItem={QuickSearchFilterItems} />
			<FilterByPrice />
			<Divider style={{ marginTop: '10px' }} />
			<CustomFilter filterTiltle={'Categories'} listFilterItem={BookCategories} />
			<CustomFilter filterTiltle={'Authors'} listFilterItem={BookAuthors} />
			<SpecialBookCard />
		</Fragment>
	);
};

export default SideBar;
