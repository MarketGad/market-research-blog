import React from 'react';
import Footer from '../Components/Footer';
import SignIn from '../Screens/signin';
import Popup from '../Components/Popup';

const Whatwedo = () => {
	const [ openSignin, setOpenSignin ] = React.useState(false);
	return (
		<div style={{ fontSize: '12px', fontWeight: '400' }}>
			<div className='container'>
				<h2 className='center privacy-top' style={{ fontWeight: '600', letterSpacing: '0.02em' }}>
					What do we offer?
				</h2>
				<h4 className='privacy-head' style={{ fontWeight: '800' }}>
					1.IDEATORS AND ENTREPRENEURS
				</h4>
				<p style={{ fontSize: '22px', textAlign: 'justify' }}>
					<i>
						“Some of the world’s most ground breaking businesses came from ordinary people who had courage
						to believe in their crazy ideas.”
					</i>
				</p>
				<p className='flow-text' style={{ fontSize: '22px', fontWeight: '400', textAlign: 'justify' }}>
					If you have an idea which you think can become the next Indian unicorn, why don’t you test its
					feasibility with us? We provide end-to-end market research, idea validation strategy design and
					assistance in investments, free of cost for a limited time.
				</p>
				<ol
					className='flow-text'
					type='1'
					style={{ fontSize: '22px', fontWeight: '400', textAlign: 'justify' }}
				>
					<li>
						We analyse your idea and research about the market you’re interested in with a non-disclosure
						agreement
					</li>
					<li>
						Consultancy from our team of business professionals and engineers for coming up with a
						go-tomarket strategy
					</li>
					<li>Designing primary research for validation of your idea and strategize its implementation</li>
					<li>Creating investor ready pitch deck</li>
				</ol>
				<h4 className='privacy-head' style={{ fontWeight: '600' }}>
					2. STARTUPS
				</h4>
				<p className='flow-text' style={{ fontSize: '22px', fontWeight: '400', textAlign: 'justify' }}>
					We provide with market research and help start-ups in data driven decision making.
				</p>

				<ol
					className='flow-text'
					type='1'
					style={{ fontSize: '22px', fontWeight: '400', textAlign: 'justify' }}
				>
					<li>
						Industry trend analysis and competitor landscaping for organizations to predict how products and
						services will fare in the market place
					</li>
					<li>
						Devise and evaluate methods for collecting data, such as surveys, focus groups, questionnaires
						and opinion polls
					</li>
					<li>
						Interpreting and organizing the information into statistical tables and present the findings by
						visual means to assist in data-driven informed decision making
					</li>
					<li>Measure effectiveness of marketing programs and strategies</li>
				</ol>
				<div className='center'>
					<button
						// onClick={() => setOpenSignin(true)}
						style={{ background: '#080808d9', margin: '1.5em', fontSize: '1.3em', fontWeight: '450' }}
						className='btn waves-effect waves-light'
					>
						Get Started!
					</button>
				</div>
				<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
					<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
				</Popup>
			</div>
			<Footer />
		</div>
	);
};
export default Whatwedo;
