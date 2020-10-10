import React from 'react';

const Discounts = () => {
	const BurnPoint = () => {
		alert('You’ve insufficient coins, earn more by interacting with products');
		return;
	};
	return (
		<div className='container'>
			<div className='product-content center'>
				<h5>
					Burn your interaction points to join the exclusive club and earn discounts on your subscriptions
				</h5>
				<div style={{ padding: '15px' }}>
					<a className='waves-effect waves-light btn-large pro-btn1' onClick={BurnPoint}>
						Burn 1000 points to enter
					</a>
				</div>
			</div>
		</div>
	);
};
export default Discounts;
