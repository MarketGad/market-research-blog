import React from 'react';

const Offerings = () => {
	return (
		<section className='fservices'>
			<div className='offeringhead'>Our Offerings</div>
			<div className='row' style={{ paddingLeft: '50px', paddingRight: '50px' }}>
				<div className='col s12 l4 center' style={{ padding: '40px' }}>
					<i className='large material-icons'>analytics</i>
					<h5 className='header'>Market Validation</h5>
				</div>

				<div className='col s12 l4 center' style={{ padding: '40px' }}>
					<i className='large material-icons'>domain</i>
					<h5 className='header'>Venture Deck</h5>
				</div>

				<div className='col s12 l4 center' style={{ padding: '40px' }}>
					<i className='large material-icons'>forum</i>
					<h5 className='header'>Consulting</h5>
				</div>
			</div>
		</section>
	);
};

export default Offerings;
