import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import ThreeDotLoad from './ThreeDotLoad';
import { Redirect } from 'react-router-dom';

const FreelanceFinish = (props) => {
	const [ RegisterJobSuccess, setRegisterJobSuccess ] = React.useState(false);
	const [ load, setLoad ] = React.useState('');
	const {
		skills,
		location,
		experience,
		qualification,
		passionate,
		portfolio,
		linkedIn,
		experienceyears,
		openFinish,
		setOpenFinish
	} = props;
	const submithandler = (e) => {
		e.preventDefault();
		const token = Cookies.get('session-id');
		const config = {
			headers: {
				Authorization: `Bearer  ${token}`
			}
		};
		const data = {
			skills: skills,
			location: location,
			experience: experience,
			qualification: qualification,
			passionateAbout: passionate,
			portfolioLink: portfolio,
			linkedIn: linkedIn,
			experienceyears: experienceyears
		};
		setLoad(true);
		axios.post(process.env.REACT_APP_BASEURL + '/api/jobprofiles', data, config).then(
			(response) => {
				if (response.status === 200) {
					setRegisterJobSuccess(true);
					setOpenFinish(false);
					setLoad(false);
					window.location.reload(false);
				} else {
					alert(response.err);
				}
			},
			(error) => {
				if (error.message === 'Request failed with status code 413') {
					alert('upload photo size should be less than 500kb');
				} else {
					console.log(error);
					alert('One user can register once');
					window.location.reload(false);
				}
			}
		);
	};
	if (RegisterJobSuccess === true) {
		return <Redirect to='/' />;
	} else if (load === true) {
		return (
			<div style={{ textAlign: 'center', padding: '12%' }}>
				<ThreeDotLoad />
			</div>
		);
	} else {
		return (
			<div className='row' style={{ padding: '30px' }}>
				<div className='col l6 s12 center'>
					<img
						width='100%'
						src={
							'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422793/Theme/Photo_r6eo4i.png'
						}
					/>
				</div>
				<div className='col l6 s12'>
					<div
						className='center'
						style={{ fontSize: '1.5em', fontFamily: 'Bahnschrift', color: 'darkblue', padding: '20px 0' }}
					>
						Once you create your job profile,you can’t edit your profile for a month.Happy Gigging :)
					</div>
					<form Validate onSubmit={submithandler}>
						<div className='center' style={{ padding: '15px' }}>
							<label>
								<input required class='with-gap' name='group1' type='radio' />
								<span>
									I agree to all{' '}
									<a target='_blank' rel='noopener noreferrer' href='/about'>
										Terms & Conditions
									</a>
								</span>
							</label>
						</div>
						<div className='center'>
							<button
								type='submit'
								class='btn-small'
								style={{
									margin: '6%',
									backgroundColor: '#1e4a72',
									color: 'white',
									borderRadius: '15px',
									padding: '0 7%'
								}}
							>
								Finish
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
};

export default FreelanceFinish;
