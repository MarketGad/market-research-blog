import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const Subscribe = () => {
	const [ email, setEmail ] = useState('');
	const submitHandler = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: process.env.REACT_APP_BASEURL + '/api/subscribe',
			// url: "http://localhost:5000/api/subscribe",
			data: { email }
		})
			.then((response) => {
				console.log(response);
			})
			.catch((response) => {
				console.log(response);
			});

		// make all the field null
	};
	return (
		<section className='subscribe'>
			<form className='signup-form' onSubmit={submitHandler}>
				<div className='row' style={{ margin: 0 }}>
					<div className='col s12 l5 container ml-3 mobile-hide' style={{ paddingLeft: '6.5%' }}>
						<h6 style={{ paddingTop: '10px', fontWeight: '600', color: 'white' }}>Contact us</h6>
						<div>
							<p className='grey-text'>marketgad.service@gmail.com</p>
						</div>
					</div>
					<div className='col s12 l5 container ml-3 center desktop-hide'>
						<h6 style={{ paddingTop: '10px', fontWeight: '600', color: 'white' }}>Contact us</h6>
						<div>
							<p className='grey-text'>marketgad.service@gmail.com</p>
						</div>
					</div>
					<div className='col s12 l2 container'>
						<h6 style={{ paddingTop: '10px', fontWeight: '600', color: 'white' }} className='center'>
							Follow us
						</h6>
						<div className='center' style={{ paddingBottom: '15px' }}>
							<a href='https://www.linkedin.com/company/marketgad'>
								<img
									className='social'
									alt='li'
									src='https://img.icons8.com/color/100/000000/linkedin.png'
								/>
							</a>
							<a href='https://www.instagram.com/marketgad'>
								<img
									className='social'
									alt='tw'
									src='https://img.icons8.com/color/48/000000/instagram-new.png'
								/>
							</a>
							<a href='https://www.facebook.com/MarketGad-104038534696800/'>
								<img
									className='social'
									alt='lo'
									src='https://img.icons8.com/fluent/48/000000/facebook-new.png'
								/>
							</a>
						</div>
					</div>

					<div className='col s12 l5 container'>
						<h6 style={{ paddingTop: '10px', fontWeight: '600', color: 'white' }} className='center'>
							Subscribe latest products from MG
						</h6>
						<div className='row subscribe-area'>
							<div className='col l9 s12'>
								<Grid item xs={12}>
									<div>
										<TextField
											type='email'
											variant='outlined'
											required
											fullWidth
											id='email'
											label='Email address'
											name='email'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</Grid>
							</div>
							<div className='col l3 s12'>
								<div>
									<button className='signup-button btn waves-effect'>Subscribe</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Subscribe;
