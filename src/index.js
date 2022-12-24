import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home.js';
import Apropos from './pages/Apropos';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/apropos">
				<Apropos />
			</Route>
			<Footer />
		</Router>
	</React.StrictMode>,
);


