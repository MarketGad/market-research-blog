import React from 'react';
import Footer from '../Components/Footer';
import SignIn from '../Screens/signin';
import Popup from '../Components/Popup';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Aboutus = () => {
	const token = Cookies.get('session-id');
	const [ openSignin, setOpenSignin ] = React.useState(false);
	return (
		<div>
			<div style={{ margin: '1% 10%' }}>
				<div className='row '>
					<div className='col l4 s12 hide-on-large-only'>
						<img
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603731762/Theme/about_bulb_s8m9jf.png'
							alt='glowing bulb'
							width='90%'
						/>
					</div>
					<div className='col l8 s12' style={{ padding: '5% 5% 0 0' }}>
						<div style={{ fontFamily: "'Lato', sans-serif", fontSize: '2em', padding: '10px 0' }}>
							Glow the bulb &
							<br /> Earn coins
						</div>
						<div style={{ fontSize: '1.3em' }}>
							We are first of its kind tech blog that rewards its user for staying updated with latest
							product trends.We keep millenials updated in life with all distruptive technology and
							e-commerce products launching daily.Try these out and interact with them to earn MG coins
							everyday.Coins can be traded for exclusive discounts on our marketplace.
						</div>
					</div>
					<div className='col l4 s12 hide-on-med-and-down'>
						<img
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603731762/Theme/about_bulb_s8m9jf.png'
							alt='glowing bulb'
							width='90%'
						/>
					</div>
				</div>
				{/* <div
					className='maiDiv'
					style={{
						marginBottom: '0',
						padding: '0',
						fontSize: '0'
					}}
				>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
						<path
							fill='gray'
							fill-opacity='0.4'
							d='M0,224L80,202.7C160,181,320,139,480,154.7C640,171,800,245,960,245.3C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
						/>
					</svg>
				</div> */}
				{/* <div
					style={{
						backgroundColor: 'white',
						marginTop: '0',
						fontSize: '0'
					}}
				>
					<div
						style={{
							backgroundColor: 'rgb(128,128,128,0.4)',
							height: '100px',
							position: 'relative'
						}}
					>
						<img
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603731643/Theme/aboutrocket_fl6qy7.png'
							style={{ marginLeft: '60%', zIndex: '9', marginTop: '-150px' }}
							width='37%'
						/>
					</div>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
						<path
							fill='gray'
							fill-opacity='.4'
							d='M0,224L80,202.7C160,181,320,139,480,154.7C640,171,800,245,960,245.3C1120,245,1280,171,1360,133.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
						/>
					</svg>
				</div> */}
				<div className='row'>
					<div className='col l4 s12 hide-on-large-only'>
						<img
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603731643/Theme/aboutrocket_fl6qy7.png'
							width='100%'
						/>
					</div>
					<div className='col l8 s12' style={{ padding: '5% 5% 0 0' }}>
						<div style={{ fontFamily: "'Lato', sans-serif", fontSize: '2em', padding: '10px 0' }}>
							India's First Product
							<br /> Launch Platform
						</div>
						<div style={{ fontSize: '1.3em' }}>
							MarketGad is India’s first and foremost product launch platform. It is the go to destination
							for technology startups to launch their products for end consumers to review them first
							hand.
						</div>
					</div>
					<div className='col l4 s12 hide-on-med-and-down'>
						<img
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603731643/Theme/aboutrocket_fl6qy7.png'
							width='100%'
						/>
					</div>
				</div>

				<div>
					<div style={{ fontFamily: "'Lato', sans-serif", fontSize: '2em', padding: '10px 0' }}>
						Work for what you are
						<br /> passionate about
					</div>
					<img
						src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603822251/Theme/aboutwebinfo_qa6zzo.png'
						width='100%'
					/>
				</div>

				{/*{token === undefined && (
          <div className="center">
            <Link
              onClick={() => setOpenSignin(true)}
              style={{
                background: "#080808d9",
                margin: "1.5em",
                fontSize: "1.4em",
                fontWeight: "800",
              }}
              className="btn-small waves-effect waves-light"
            >
              Join us
            </Link>
          </div>
        )}*/}
			</div>
			<Footer />
		</div>
	);
};

export default Aboutus;
