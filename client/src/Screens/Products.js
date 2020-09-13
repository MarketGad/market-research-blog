import React from 'react';
import PeopleList from '../Components/PeopleList';
import ProductList from '../Components/ProductList';
// import Footer2 from '../Components/Footer2';

const Products = () => {
	return (
		<div>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<div className='left-align' style={{ padding: '0' }}>
							<a className='waves-effect waves-light btn-small pro-btn1' href='/registerforproduct'>
								Add Product
							</a>
						</div>
						<h4 className='center' style={{ fontFamily: 'GlacialIndifferenceBold' }}>
							Hot Products
						</h4>

						<ProductList />
					</div>
					<div className='col s12 l4'>
						<h4 className='center' style={{ fontFamily: 'GlacialIndifferenceBold' }}>
							<div className='right-align'>
								<a className='waves-effect waves-light btn-small register-job' href='/registerforjobs'>
									Register
								</a>
							</div>
							Job profiles
						</h4>

						<PeopleList />
					</div>
				</div>
			</div>
			{/* <Footer2 /> */}
		</div>
	);
};

export default Products;
