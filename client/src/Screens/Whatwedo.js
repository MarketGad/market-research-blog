import React from 'react';
// import axios from 'axios';
// import Slide from '@material-ui/core/Slide';
// import { Redirect } from 'react-router-dom';
import Footer from '../Components/Footer';

// const Transition = React.forwardRef(function Transition (props, ref) {
// 	return <Slide direction='up' ref={ref} {...props} />;
// });

const Whatwedo = () => {
	// const [ open, setOpen ] = React.useState(false);
	// const [ redirect, setRedirect ] = React.useState(false);
	// const [name, setName] = React.useState("");
	// const [picture, setPicture] = React.useState("");

	// const handleClickOpen = () => {
	// 	alert('Signup and Register your Product !!');
	// 	setOpen(true);
	// };

	// const handleClose = () => {
	// 	setOpen(false);
	// };

	// const responseSuccessGoogle = (response) => {
	// 	console.log(response);
	// 	// setPicture(response.profileObj.imageUrl);
	// 	axios({
	// 		method: 'POST',
	// 		url: process.env.REACT_APP_BASEURL +'/api/googlelogin',
	// 		data: { tokenId: response.tokenId }
	// 	}).then((response) => {
	// 		alert(`Welcome ${response.data.user.name}! You have been Successfully Signed In!`);
	// 		console.log('Google login success ', response);
	// 		setRedirect(true);
	// 		window.location.reload(false);
	// 	});
	// };

	// const responseErrorGoogle = (response) => {
	// 	console.log(response);
	// };

	// if (open) {
	// 	return <Redirect to='/signup' />;
	// } else {
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
						// onClick={handleClickOpen}
						style={{ background: '#080808d9', margin: '1.5em', fontSize: '1.3em', fontWeight: '450' }}
						className='btn waves-effect waves-light'
					>
						Get Started!
					</button>
				</div>
				{/* <div>
					<Dialog
						open={open}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby='alert-dialog-slide-title'
						aria-describedby='alert-dialog-slide-description'
					>
						<div className='center' style={{ padding: '10px', fontSize: '20px' }}>
							<DialogTitle id='alert-dialog-slide-title'>
								Login to Get 10 Days of Free Subscription and use the exclusive Dashboard Feature
							</DialogTitle>
						</div>
						<div className='center' style={{ padding: '10px' }}>
							<DialogActions>
								<Button onClick={handleClose} href='/dashboard'>
									<GoogleLogin
										clientId='798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com'
										onSuccess={responseSuccessGoogle}
										onFailure={responseErrorGoogle}
										cookiePolicy={'single_host_origin'}
										redirectUri={'https://markeetgad.com/dashboard'}
									/>
								</Button>
							</DialogActions>
						</div>
					</Dialog>
				</div> */}
			</div>
			<Footer />
		</div>
	);
};
export default Whatwedo;
