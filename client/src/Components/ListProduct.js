import React from 'react';

const ListProduct = () => {
	return (
		<div>
			<a
				className='waves-effect waves-light btn-small pro-btn1'
				style={{ backgroundColor: '#0153a5', color: 'white' }}
			>
				Deals
			</a>
			<a
				className='waves-effect waves-light btn-small pro-btn1'
				style={{ backgroundColor: '#0153a5', color: 'white', float: 'right' }}
				href='/registerforproduct'
			>
				List your Product
			</a>
		</div>
	);
};
export default ListProduct;
