import React from 'react';

const FreelanceAgree = (props) => {
	return (
		<div>
			<div className='row'>
				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white',
						height:
							'300px' /*,borderRight:'2px solid #87879f' ,borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px' */
					}}
				>
					<div
						style={{
							textAlign: 'center' /*, paddingRight:'26%'*/,
							paddingTop: '10%'
						}}
					>
						<img
							width='100%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422864/Theme/Photo2_mvvte6.png'
							}
						/>
					</div>
				</div>
				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white',
						height: '300px' /* ,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/
					}}
				>
					<div
						className='center'
						style={{
							fontSize: '1.6em',
							fontFamily: 'Bahnschrift',
							color: 'darkblue',
							padding: '2% 7% 3% 7%'
						}}
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
						<div
							className='center'
							style={{
								fontSize: '1em',
								fontFamily: 'Bahnschrift',
								color: '#87879f',
								marginBottom: '5%',
								padding: '0% 8% 0% 8%'
							}}
						>
							Facts: India is the largest freelancers' market with unlimited working opportunities.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FreelanceAgree;
