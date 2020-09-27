import React from 'react';
import Footer from '../Components/Footer';
import PeopleList from '../Components/PeopleList';
import ProductList from '../Components/ProductList';
import Subscribe from '../Components/Subscribe';
import TodayLaunch from '../Components/TodayLaunch';
import TrendingProduct from '../Components/TrendingProduct';

const Products = () => {
	return (
		<div>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<div className='product-page-head'>What's hot today?</div>
						<TodayLaunch />
						<div className='product-page-head'>What's hot ?</div>
						<h6 className='product-quote'>Latest cool stuffs to fix your pain points.Vote the best one.</h6>
						<ProductList />
					</div>
					<div className='col s12 l4'>
						<div className='add-mobile-btn'>
							<div className='product-page-head'>Trending products</div>
							<TrendingProduct />
						</div>

						{/* <div className='joblist'> */}

						<div className='row' style={{ margin: '0', padding: '0' }}>
							<div className='col s8'>
								<div className='product-page-head left-head'>Trending talents</div>
							</div>
							<div className='col s4'>
								<div className='right-align'>
									<a
										className='waves-effect waves-light btn-small pro-btn1 add-mobile-btn'
										href='/registerforjobs'
									>
										Add profile
									</a>
								</div>
							</div>
						</div>
						{/* </div> */}
						<PeopleList />
					</div>
				</div>
			</div>
			<Subscribe />
			<Footer />
		</div>
	);
};

export default Products;
