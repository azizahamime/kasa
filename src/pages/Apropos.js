import React, { Fragment } from 'react';
import Banner from '../components/Banner';
import dataAbout from '../components/About.json';
import Collapse from '../components/Collapse';

function Apropos() {
	return (
		<Fragment>
			<Banner location='apropos' />
			<section>
				<div className='container'>
					<div className='about'>
						{dataAbout.map((data, index) => (
							<Collapse key={index} title={data.title} description={data.description} />
						))}
					</div>
				</div>
			</section>

		</Fragment>
	);
}
export default Apropos;
