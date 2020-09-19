import React from 'react';
import PeopleList from '../Components/PeopleList';
import ProductList from '../Components/ProductList';
import AddIcon from '@material-ui/icons/Add';
// import Footer2 from '../Components/Footer2';

const Products = () => {
	return (
		<div>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<div className='relative-add'>
							<div className='product-page-head'>Hot or not ?</div>
							<a
								className='waves-effect waves-light btn pro-btn1 add-mobile-btn'
								href='/registerforproduct'
							>
								Add Product
							</a>
							{/* <div className='right-align add-mobile circle'>
								<a
									className='waves-effect waves-light btn pro-btn1'
									style={{ borderRadius: '50%' }}
									href='/registerforproduct'
								>
									<AddIcon style={{ position: 'relative', top: '5px', fontSize: '1.8em' }} />
								</a>
							</div> */}
						</div>
						<ProductList />
					</div>
					<div className='col s12 l4'>
						<div className='relative-add'>
							<div className='product-page-head left-head'>Job Profiles</div>
							<div className='right-align'>
								<a
									className='waves-effect waves-light btn pro-btn1 add-mobile-btn'
									href='/registerforjobs'
								>
									Register
								</a>
							</div>
							{/* <div className='right-align add-mobile circle'>
								<a
									className='waves-effect waves-light btn pro-btn1'
									style={{ borderRadius: '50%' }}
									href='/registerforjobs'
								>
									<AddIcon style={{ position: 'relative', top: '5px', fontSize: '1.8em' }} />
								</a>
							</div> */}
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
