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
			url: 'https://serieux-saucisson-31787.herokuapp.com/api/subscribe',
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
					<div className='col s12 l4 container ml-3 mobile-hide' style={{ paddingLeft: '6.5%' }}>
						<h5 style={{ paddingTop: '10px', fontWeight: '600', color: 'white' }}>Contact Us</h5>
						<div>
							<p className='grey-text'>marketgad20@gmail.com</p>
							<p className='grey-text'>+91 7652064835</p>
						</div>
					</div>
					<div className='col s12 l4 container ml-3 center desktop-hide'>
						<h5 style={{ paddingTop: '10px', fontWeight: '600', color: 'white' }}>Contact Us</h5>
						<div>
							<p className='grey-text'>marketgad20@gmail.com</p>
							<p className='grey-text'>+91 7652064835</p>
						</div>
					</div>
					<div className='col s12 l3 container'>
						<h5 style={{ paddingTop: '10px', fontWeight: '600', color: 'white' }} className='center'>
							Follow us
						</h5>
						<div className='center' style={{ paddingBottom: '15px' }}>
							<a href='https://www.linkedin.com/company/marketgad'>
								<img
									className='social'
									alt='li'
									src='https://img.icons8.com/color/100/000000/linkedin.png'
								/>
							</a>
							<a href='https://www.instagram.com/marketgad'>
								{' '}
								<img
									className='social'
									alt='tw'
									src='https://img.icons8.com/color/48/000000/instagram-new.png'
								/>
							</a>
							<a href='https://www.facebook.com/MarketGad-104038534696800/'>
								{' '}
								<img
									className='social'
									alt='lo'
									src='https://img.icons8.com/fluent/48/000000/facebook-new.png'
								/>
							</a>
						</div>
					</div>

					<div className='col s12 l5 container'>
						<h5 style={{ paddingTop: '10px', fontWeight: '600', color: 'white' }} className='center'>
							Subscribe for latest stuff from MG
						</h5>
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
											label='Email Address'
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
