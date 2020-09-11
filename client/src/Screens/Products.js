import React from 'react';
import PeopleList from '../Components/PeopleList';
import ProductList from '../Components/ProductList';
// import Footer2 from '../Components/Footer2';

const Products = () => {
	return (
		<div>
			<div style={{ margin: '0 12%' }}>
				<div className='row'>
					<div className='col s12 l8'>
						<h4 className='center' style={{ fontFamily: 'GlacialIndifferenceBold' }}>
							Hot Products
						</h4>
						<div className='right-align'>
							<a
								className='waves-effect waves-light btn-small pro-btn1'
								style={{ backgroundColor: '#0153a5', color: 'white' }}
								href='/registerforproduct'
							>
								List your Product
							</a>
						</div>
						<ProductList />
					</div>
					<div className='col s12 l4'>
						<h4 className='center' style={{ fontFamily: 'GlacialIndifferenceBold' }}>
							List Of People
						</h4>
						<div className='right-align'>
							<a
								className='waves-effect waves-light btn-small hire-btn1'
								style={{ backgroundColor: '#0153a5', color: 'white' }}
								href='/registerforjobs'
							>
								Register
							</a>
						</div>
						<PeopleList />
					</div>
				</div>
			</div>
			{/* <Footer2 /> */}
		</div>
	);
};

export default Products;
