import React from 'react';

const BriefDetails = () => {
	return (
		<div>
			<div className='desktop-brief-details'>
				<div className='row' style={{ margin: '0' }}>
					<div className='col s12 l6' style={{ paddingTop: '7vh', paddingRight: '5%' }}>
						<h3
							className='center'
							style={{
								fontSize: '2.6em',
								color: '#0153a5',
								textAlign: 'right',
								fontFamily: 'GlacialIndifferenceBold',
								fontWeight: 'normal',
								fontStyle: 'normal'
							}}
						>
							ABOUT US
						</h3>
						<p
							className='post-brief'
							style={{
								fontFamily: 'GlacialIndifferenceMedium',
								marginLeft: '20%',
								textAlign: 'right',
								fontSize: '1.8rem',
								height: '35vh'
							}}
						>
							MarketGad believes in executing billion-dollar ideas. Tinkering is the earliest stage for a
							grassroot level start-up. It channelizes the way forward while the entrepreneurs are getting
							started
						</p>
					</div>
					<div className='col l6 s12'>
						<img
							className='brief-image'
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1597229968/marketgad_front_page_2_2_sjfxig.jpg'
							alt='1st'
						/>
					</div>
				</div>
				<div className='row' style={{ margin: '0' }}>
					<div className='col l6 s12' style={{ textAlign: 'right' }}>
						<img
							className='brief-image'
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1597229968/what_we_do__MarketGad_2_ipvsee.jpg'
							alt='1st'
						/>
					</div>
					<div className='col s12 l6' style={{ paddingTop: '7vh', paddingLeft: '5%' }}>
						<h3
							className='center'
							style={{
								fontSize: '2.6em',
								color: '#0153a5',
								textAlign: 'left',
								fontFamily: 'GlacialIndifferenceBold',
								fontStyle: 'normal'
							}}
						>
							WHAT WE DO
						</h3>
						<p
							className='post-brief'
							style={{
								fontFamily: 'GlacialIndifferenceMedium',
								marginRight: '20%',
								textAlign: 'left',
								fontSize: '1.8rem',
								height: '35vh'
							}}
						>
							If you have an idea which you think can become the next Indian unicorn, why don’t you test
							its feasibility with us? We provide end-to-end market research, idea validation strategy
							design and assistance in investments.
						</p>
					</div>
				</div>
			</div>
			<div className='mobile-brief-details'>
				<div className='row'>
					<div className='col s12'>
						<h3
							className='center'
							style={{
								color: '#0153a5',
								fontSize: '2.3em',
								fontFamily: 'GlacialIndifferenceBold',
								fontWeight: 'normal',
								fontStyle: 'normal'
							}}
						>
							ABOUT US
						</h3>
						<img
							width='100%'
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1597229968/marketgad_front_page_2_2_sjfxig.jpg'
							alt='1st'
						/>
						<p
							style={{
								fontFamily: 'GlacialIndifferenceMedium',
								textAlign: 'center',
								fontSize: '1.5em'
							}}
						>
							MarketGad believes in executing billion-dollar ideas. Tinkering is the earliest stage for a
							grassroot level start-up. It channelizes the way forward while the entrepreneurs are getting
							started
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col s12'>
						<h3
							className='center'
							style={{
								fontSize: '2.3em',
								color: '#0153a5',
								fontFamily: 'GlacialIndifferenceBold',
								fontStyle: 'normal'
							}}
						>
							WHAT WE DO
						</h3>
						<img
							width='100%'
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1597229968/what_we_do__MarketGad_2_ipvsee.jpg'
							alt='1st'
						/>
						<p
							style={{
								fontFamily: 'GlacialIndifferenceMedium',
								textAlign: 'center',
								fontSize: '1.5em'
							}}
						>
							If you have an idea which you think can become the next Indian unicorn, why don’t you test
							its feasibility with us? We provide end-to-end market research, idea validation strategy
							design and assistance in investments.
						</p>
					</div>
					<div className='col s12' />
				</div>
			</div>
		</div>
	);
};

export default BriefDetails;
