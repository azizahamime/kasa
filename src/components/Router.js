import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from '../pages/Home';
import Apropos from '../pages/Apropos';
import Error from '../pages/404';
import Footer from './Footer';

function Routers() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
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