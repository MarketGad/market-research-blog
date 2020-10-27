import React from 'react';
import { Link } from 'react-router-dom';

const BurnCoinError = (props) => {
	return (
		<div className='row' style={{ margin: '0' }}>
			<div className='col l6 s12 divider-popup'>
				<div className='center'>
					<img
						width='80%'
						src={
							'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603256319/Theme/9_Icon_qdgix7.png'
						}
					/>
				</div>
			</div>
			<div className='col l6 s12' style={{ paddingTop: '15px' }}>
				<div className='center' className='burncoinerr1'>
					997 MG users are in the waiting list!
				</div>
				<div className='center' className='burncoinerr1'>
					Burn your interaction points to join the exclusive discounts on the products.
				</div>
				<div className='center'>
					<div className='center' className='burncoinerr3'>
						You need 1000 interaction coins to activate this.
					</div>
					<div className='center'>
						<Link to='/'>
							<a class='btn waves-effect waves-teal burn-err-button'>Earn Coins</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurnCoinError;
