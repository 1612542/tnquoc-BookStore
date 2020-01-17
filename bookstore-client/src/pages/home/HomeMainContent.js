import React, { Fragment } from 'react';

import AdSlideShow from '../../components/AdSlideShow';
import RowOfBookCard from '../../components/RowOfBookCard';
import TypeRowOfBookCard from '../../components/TypeRowOfBookCard';

const MainContent = ({ data }) => {
	return (
		<Fragment>
			<div id="slideshow" style={{ marginBottom: '10px' }}>
				<AdSlideShow />
			</div>
			<TypeRowOfBookCard title={'Best sellers in Books'} />
			<RowOfBookCard data={data} />
			<TypeRowOfBookCard title={'Popular Reads'} />
			<RowOfBookCard data={data} />
			<RowOfBookCard data={data} />
			<RowOfBookCard data={data} />
			<RowOfBookCard data={data} />
			<RowOfBookCard data={data} />
		</Fragment>
	);
};

export default MainContent;
