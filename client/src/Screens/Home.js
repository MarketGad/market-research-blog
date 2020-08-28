import React, { Component } from 'react';
import Slider from '../Components/Slider';
import Subscribe from '../Components/Subscribe';
import Taglines from '../Components/Taglines';
import Footer from '../Components/Footer';
// import Offerings from '../Components/Offerings';
import FeaturedResearch from '../Components/FeaturedResearch';
import BriefDetails from '../Components/BriefDetails';

class Home extends Component {
	render () {
		return (
			<div>
				<Slider />
				<BriefDetails />
				<Taglines />
				{/* <Review /> */}
				{/* <Offerings /> */}
				<FeaturedResearch />
				<Subscribe />
				<Footer />
			</div>
		);
	}
}

export default Home;
