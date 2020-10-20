import React from 'react';

const FreelanceFinish = (props) => {
	return (
		<div>
			<div className='row' style={{ border: 'none' }}>
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
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422793/Theme/Photo_r6eo4i.png'
							}
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
						style={{ fontSize: '1.6em', fontFamily: 'Bahnschrift', color: 'darkblue', padding: '7%' }}
					>
						Would you like to create your freelancing profile at MG?
					</div>
					<div className='center'>
						<div
							class='btn-small'
							style={{
								backgroundColor: '#00a34f',
								marginRight: '7%',
								marginBottom: '5%',
								paddingLeft: '7%',
								paddingRight: '7%',
								color: 'white',
								border: 'none',
								borderRadius: '15px'
							}}
						>
							Yes
						</div>
						<div
							class='btn-small'
							style={{
								backgroundColor: '#eb0c0e',
								paddingLeft: '7%',
								paddingRight: '7%',
								marginBottom: '5%',
								color: 'white',
								border: 'none',
								borderRadius: '15px'
							}}
						>
							No
						</div>
						<div
							className='center'
							style={{
								fontSize: '1.2em',
								fontFamily: 'Bahnschrift',
								color: '#87879f',
								marginBottom: '5%',
								padding: '0% 8% 0% 8%'
							}}
						>
							We are the only platform that doesn't charge any commissions on your freelancing work. Happy
							Gigging :)
						</div>
						<div className='center'>
							<p>
								<label>
									<input
										class='with-gap'
										name='group1'
										type='radio'
										style={{ backgroundColor: 'white' }}
									/>
									<span>
										I agree to all <a href='#'>Terms & Conditions </a>
									</span>
								</label>
							</p>
						</div>
						<div className='center'>
							<div
								class='btn-small'
								style={{
									backgroundColor: '#1e4a72',
									color: 'white',
									border: 'none',
									borderRadius: '15px',
									paddingLeft: '7%',
									paddingRight: '7%'
								}}
							>
								Finish
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FreelanceFinish;
