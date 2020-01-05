import React, { Fragment } from 'react';

import AdSlideShow from './AdSlideShow';
import RowOfBookCard from './RowOfBookCard';
import TypeRowOfBookCard from './TypeRowOfBookCard';

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
		</Fragment>
	);
};

export default MainContent;
