import React from 'react';

const BurnCoin = (props) => {
	return (
		<div>
			<div className='row'>
				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white',
						height:
							'300px' /* borderRight:'2px solid #87879f' ,borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px' */
					}}
				>
					<p style={{ textAlign: 'center' }}>
						<img
							width='100%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602423058/Theme/10_Icon_qhe3vj.png'
							}
							style={{ paddingTop: '5%' }}
						/>
					</p>
				</div>
				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white',
						height: '300px' /* ,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/
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
							padding: '0% 1% 7% 0%'
						}}
					>
						Burn your interaction points to join the exclusive club and earn discounts on interesting
						products and subscription..
					</div>
					<div className='center'>
						<div
							className='center'
							style={{
								fontSize: '1.2em',
								fontFamily: 'Bahnschrift',
								color: '#87879f',
								marginBottom: '10%',
								padding: '2% 22% 0% 22%'
							}}
						>
							997 MG users are in the waiting list!
						</div>
						<div className='center'>
							<div
								class='btn-small'
								style={{
									backgroundColor: '#1e4a72',
									color: 'white',
									border: 'none',
									borderRadius: '9px',
									padding: '0% 4% 0% 4%',
									margin: '0% 7% 0% 7%',
									fontWeight: 'bold',
									fontSize: '19px'
								}}
							>
								Join Now
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurnCoin;
