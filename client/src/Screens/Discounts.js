import React from 'react';
import BurnCoinError from '../Components/BurnCoinError';
import Popup from '../Components/Popup';
import Footer from '../Components/Footer';
import Cookies from 'js-cookie';
import SignIn from './signin';

const Discounts = () => {
	const isLoggedin = Cookies.get('session-id');
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const [ openBazaarErr, setOpenBazaarErr ] = React.useState(false);
	return (
		<div className='bazaar-bkgrd'>
			<div
				style={{
					margin: '0 12%',
					minHeight: '90vh'
				}}
			>
				<div className='product-content center'>
					<div className='logo-gold'>
						<img
							width='7%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348061/Theme/Golden_MG_Logo_oxwzlm.png'
							}
						/>
					</div>
					<div>
						<div className='center baz'>
							Burn your interaction points to join the exclusive club <br /> and earn discounts on your
							subscription
						</div>
						<img
							width='15%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348825/Theme/Crown_u9zn3l.png'
							}
						/>
						<div className='center'>
							<div className='baz'>Burn 1000 points to enter</div>
							<div>
								<a
									className='waves-effect waves-teal btn enter-button'
									onClick={() => {
										if (isLoggedin) setOpenBazaarErr(true);
										else setOpenSignin(true);
									}}
								>
									Enter Now
								</a>
								<Popup noClose={true} openPopup={openBazaarErr} setOpenPopup={setOpenBazaarErr}>
									<BurnCoinError openSignin={openBazaarErr} setOpenSignin={setOpenBazaarErr} />
								</Popup>
							</div>
							<div>
								<img
									width='65%'
									src={
										'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603382240/Theme/Infographic_iffbsf_1_qzzdln.png'
									}
								/>
							</div>
						</div>
					</div>
				</div>
				<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
					<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
				</Popup>
			</div>
			<Footer />
		</div>
	);
};
export default Discounts;
