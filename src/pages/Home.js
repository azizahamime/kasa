import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner.js';
import Card from '../components/Card.js';

function Home({ homesList }) {

	return (
		<Fragment>
			<Banner location='home' />
			<section>
				<div className='container'>
					<div className='gallery'>
						{homesList.map(home => (
							<Link key={home.id} to='#'>
								<Card title={home.title} cover={home.cover} />
							</Link>
						))};
					</div>
				</div>
			</section>
		</Fragment>
	);

}
export default Home;