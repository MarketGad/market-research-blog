import React from 'react';

const LoginSuccess = (props) => {
	return (
		<div className='exp-cont'>
			<div className='row'>
				<div className='col l6 s12'>
					<div style={{ textAlign: 'center', paddingTop: '10%' }}>
						<img
							width='90%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422732/Theme/Photo_nvvkon.png'
							}
						/>
					</div>
				</div>
				<div className='col l6 s12'>
					<div className='login-success1'>Login Successful!</div>
					<div className='center'>
						<div className='login-success2'>
							You have earned 10 interaction coins. Burn for discount offers.
						</div>
						<div className='center'>
							<div class='btn-small-burn'>Burn Coins</div>
						</div>
						<div className='row'>
							<div className='col l6 s12'>
								<div className='btn-small-1'>Earn coins</div>
							</div>
							<div className='col l6 s12'>
								<div className='btn-small-2'>Apply for jobs</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginSuccess;
