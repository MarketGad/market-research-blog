import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import Alert from '../Components/Alert';
import Cookies from 'js-cookie';
import GoogleLogin from 'react-google-login';
import VerifyOtp from './VerifyOtp';
import Popup from '../Components/Popup';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(0),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		color: '#080808d9',
		backgroundColor: 'transparent'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function SignUp (props) {
	const classes = useStyles();
	const { openSignup, setOpenSignup, setOpenSignin } = props;
	const [ email, setEmail ] = React.useState('');
	const [ first_name, setFirstName ] = React.useState('');
	const [ last_name, setLastName ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ confirmPassword, setConfirmPassword ] = React.useState('');
	const [ signupsuccess, setSignupsuccess ] = React.useState(false);
	const [ loginsuccess, setLoginsuccess ] = React.useState(false);
	const [ openOtp, setOpenOtp ] = useState(false);
	const [ errMsg, setErrMsg ] = useState('');
	const responseSuccessGoogle = (response) => {
		console.log(response);
		console.log(response.tokenId);
		axios({
			method: 'POST',
			url: process.env.REACT_APP_BASEURL + '/api/user/googlelogin',
			data: { tokenId: response.tokenId }
		}).then((response) => {
			console.log(response);
			if (response.data.success) {
				Cookies.set('session-id', response.data['token']);
				setOpenSignup(false);
				setOpenSignin(false);
				setLoginsuccess(true);
			}
			// alert(`Welcome ${response.data.user.name}! You have been Successfully Signed In!`);
		});
	};

	const responseErrorGoogle = (response) => {
		console.log(response);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			axios
				.post(process.env.REACT_APP_BASEURL + '/api/user/signupUser', {
					email: email.toLowerCase(),
					password: password,
					firstname: first_name,
					lastname: last_name
				})
				.then(
					(response) => {
						if (response.data.success === true) {
							// setOpenSignup(false);
							setOpenOtp(true);
							setSignupsuccess(true);
						}
					},
					(error) => {
						if (error.response.data.err === 'Email Already Registered and Verified') {
							setErrMsg('Email Already Registered and Verified');
						} else setErrMsg('Something went wrong');
					}
				);
		} else {
			setErrMsg('Password Mismatch');
		}
	};
	if (signupsuccess === true) {
		return (
			<Popup title='VerifyOtp' openPopup={openOtp} setOpenPopup={setOpenOtp}>
				<VerifyOtp {...props} email={email} openOtp={openOtp} setOpenOtp={setOpenOtp} />
			</Popup>
		);
	} else if (loginsuccess) {
		return <Redirect to='/' />;
	} else {
		return (
			<div>
				<Alert msg={errMsg} type='danger' />
				<div className='row'>
					<div className='col l5 s12 center'>
						<img
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602391920/Theme/2_f5ppw2.png'
							alt='login'
							style={{ paddingTop: '20%' }}
							className='popup-signin-image'
						/>
					</div>
					<div className='col l7 s12 center'>
						<Container component='main' maxWidth='xs'>
							<CssBaseline />

							<div className={classes.paper}>
								<Avatar className={classes.avatar}>
									<PersonAddIcon />
								</Avatar>
								<Typography component='h1' variant='h5' style={{ marginBottom: '25px' }}>
									Sign Up
								</Typography>
								<div className='center'>
									<GoogleLogin
										className='black-text'
										buttonText='Sign up with Google'
										clientId='798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com'
										onSuccess={responseSuccessGoogle}
										onFailure={responseErrorGoogle}
										cookiePolicy={'single_host_origin'}
										redirectUri={'/'}
									/>
								</div>
								<h6 className='signin-divider'>
									<span>or</span>
								</h6>
								<form className={classes.form} onSubmit={submitHandler}>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={6}>
											<TextField
												autoComplete='fname'
												name='firstName'
												variant='outlined'
												required
												fullWidth
												id='firstName'
												label='First Name'
												value={first_name}
												onChange={(e) => setFirstName(e.target.value)}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												variant='outlined'
												required
												fullWidth
												id='lastName'
												label='Last Name'
												name='lastName'
												value={last_name}
												onChange={(e) => setLastName(e.target.value)}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												type='email'
												variant='outlined'
												required
												fullWidth
												id='email'
												label='Email Address'
												name='email'
												autoComplete='email'
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</Grid>

										<Grid item xs={12} sm={6}>
											<TextField
												variant='outlined'
												required
												fullWidth
												name='password1'
												label='Password'
												type='password'
												id='password'
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												variant='outlined'
												required
												fullWidth
												name='password2'
												label='Confirm Password'
												type='password'
												id='password'
												value={confirmPassword}
												onChange={(e) => setConfirmPassword(e.target.value)}
											/>
										</Grid>
									</Grid>
									<Button
										type='submit'
										fullWidth
										variant='contained'
										color='primary'
										className={classes.submit}
									>
										Sign Up
									</Button>
									<Grid container justify='flex-end'>
										<Grid item>
											<Link
												onClick={() => {
													setOpenSignup(false);
												}}
												variant='body2'
											>
												Already have an account? Sign in
											</Link>
										</Grid>
									</Grid>
								</form>
							</div>
						</Container>
					</div>
				</div>
			</div>
		);
	}
}
