import React from 'react';

const SignupSuccess = (props) => {
	return (
		<div>
			<div className='row'>
				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white' /*,paddingBottom:'5%'*/,
						height:
							'400px' /*,borderRight:'2px solid #87879f' ,borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'*/
					}}
				>
					<p style={{ textAlign: 'center', paddingTop: '10%' }}>
						<img
							width='100%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602349048/Theme/Photo_mg6tgv.png'
							}
							style={{ paddingTop: '5%' }}
						/>
					</p>
				</div>
				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white',
						height: '400px' /* ,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/
					}}
				>
					<div
						className='center'
						style={{
							fontSize: '1.6em',
							fontFamily: 'Bahnschrift',
							color: 'darkblue',
							padding: '5% 7% 7% 7%'
						}}
					>
						Signup Successful!
					</div>
					<div className='center'>
						<div
							className='center'
							style={{
								fontSize: '1.2em',
								fontFamily: 'Bahnschrift',
								color: '#87879f',
								marginBottom: '7%',
								padding: '0% 22% 0% 22%'
							}}
						>
							You have earned 10 interaction coins Burn for discount offers
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
									margin: '0% 7% 12% 7%',
									fontWeight: 'bold',
									fontSize: '19px'
								}}
							>
								Burn Coins
							</div>
						</div>

						<div
							class='btn-small'
							style={{
								backgroundColor: 'white',
								marginRight: '7%',
								marginBottom: '5%',
								paddingLeft: '4%',
								paddingRight: '4%',
								color: 'darkblue',
								border: 'none',
								fontWeight: 'bold',
								borderRadius: '15px'
							}}
						>
							Earn coins
						</div>
						<div
							class='btn-small'
							style={{
								backgroundColor: 'white',
								paddingLeft: '2%',
								paddingRight: '2%',
								marginBottom: '5%',
								color: 'darkblue',
								border: 'none',
								fontWeight: 'bold',
								borderRadius: '15px'
							}}
						>
							Apply for jobs
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupSuccess;
