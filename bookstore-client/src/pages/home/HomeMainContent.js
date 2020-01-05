import React, { Fragment } from 'react';

import AdSlideShow from '../../components/AdSlideShow';
import RowOfBookCard from '../../components/RowOfBookCard';
import TypeRowOfBookCard from '../../components/TypeRowOfBookCard';

const MainContent = () => {
	return (
		<Fragment>
			<div id="slideshow" style={{ marginBottom: '10px', marginTop: '5px' }}>
				<AdSlideShow />
			</div>
			<TypeRowOfBookCard title={'Best sellers in Books'} />
			<TypeRowOfBookCard title={'Popular Reads'} />
			<RowOfBookCard />
			<RowOfBookCard />
			<RowOfBookCard />
			<RowOfBookCard />
		</Fragment>
	);
};

export default MainContent;
