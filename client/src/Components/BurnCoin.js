import React from 'react';

const BurnCoin = (props) => {
	return (
		<div>
			<div
				style={{
					backgroundColor: 'white'
					/* borderRight:'2px solid #87879f' ,borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px' */
				}}
			>
				<p style={{ textAlign: 'center' }}>
					<img
						width='55%'
						src={
							'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603205737/Theme/10_Icon_qhe3vj_mzaenf.png'
						}
						style={{ paddingTop: '1%' }}
					/>
				</p>
			</div>
			<div
				style={{
					backgroundColor: 'white'
					/* ,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/
				}}
			>
				{/*<div className='center' style={{ fontSize: '1.6em', fontFamily: 'Bahnschrift', color: 'darkblue', padding:'3% 7% 3% 5%' }}>
						997 MG users are in the waiting list!
					</div>*/}
				<div
					className='center'
					style={{
						fontSize: '1.3em',
						fontFamily: 'Bahnschrift',
						color: 'darkblue',
						padding: '0% 1% 2% 0%'
					}}
				>
					Burn your interaction points to join the exclusive club and earn discounts on interesting products
					and subscription..
				</div>
				<div className='center'>
					<div
						className='center'
						style={{
							fontSize: '1.2em',
							fontFamily: 'Bahnschrift',
							color: '#87879f',

							padding: '0% 22% 0% 22%'
						}}
					>
						997 MG users are in the waiting list!
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurnCoin;
