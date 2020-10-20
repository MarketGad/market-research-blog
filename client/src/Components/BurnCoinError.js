import React from 'react';

const BurnCoinError = (props) => {
	return (
		<div>
			<div className='row'>
				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white',
						height:
							'400px' /*, borderRight:'2px solid #87879f' ,borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px' */
					}}
				>
					<p style={{ textAlign: 'center' }}>
						<img
							width='80%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602423122/Theme/9_Icon_qdgix7.png'
							}
							style={{ paddingBottom: '7%' }}
						/>
					</p>
				</div>
				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white',
						height: '400px' /*,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/
					}}
				>
					<div
						className='center'
						style={{
							fontSize: '1.6em',
							fontFamily: 'Bahnschrift',
							color: 'darkblue',
							padding: '3% 7% 3% 5%'
						}}
					>
						997 MG users are in the waiting list!
					</div>
					<div
						className='center'
						style={{
							fontSize: '1.6em',
							fontFamily: 'Bahnschrift',
							color: 'darkblue',
							padding: '3% 7% 7% 7%'
						}}
					>
						Burn your interaction points to join the exclusive discounts on the products.
					</div>
					<div className='center'>
						<div
							className='center'
							style={{
								fontSize: '1.2em',
								fontFamily: 'Bahnschrift',
								color: '#87879f',
								marginBottom: '5%',
								padding: '0% 22% 0% 22%'
							}}
						>
							You need 1000 interaction coins to activate this.
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
								Earn Coins
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurnCoinError;
