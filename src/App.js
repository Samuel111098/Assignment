import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Intro from './components/intro/intro';
import Why from './components/why/why';
import Key from './components/keyfeatures/key';
import Mission from './components/mission/mission';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
	return (
		<div className="App">
			<Navbar sticky="top" />
			<Hero />
			<Info />
			<Intro />
			<hr />
			<Why />
			<hr />
			<Key />
			<hr />
			<Mission />
			<hr />
			<Faq />
			<Footer />
		</div>
	);
}

export default App;
