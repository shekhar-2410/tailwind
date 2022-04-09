import React from 'react';
import './index.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Static from './Component/Static';
import Test from './Component/Test';
import Testimonial from './Component/Testimonial';
import Footer from './Component/Footer';

function App() {
	return (
		<div>
			{/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
			<Navbar />
			<Hero />
			<Static />
			<Test />
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;
