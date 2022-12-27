import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Home from '../pages/Home';
import Apropos from '../pages/Apropos';
import Error from '../pages/404';
import Footer from './Footer';

function Routers() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get('/logements.json')
			.then(result => setData(result.data));
	});
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home homesList={data} />
				</Route>
				<Route path='/apropos' >
					<Apropos />
				</Route>
				<Route >
					<Error />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default Routers; 