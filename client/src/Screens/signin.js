import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Alert from '../Components/Alert';
import GoogleLogin from 'react-google-login';
import Popup from '../Components/Popup';
import SignUp from './signup';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(0),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		color: '#080808d9',
		backgroundColor: 'transparent',
		fontSize: '48vw'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(0)
	},
	submit: {
		margin: theme.spacing(2, 0, 2)
	}
}));

export default function SignIn (props) {
	const { openSignin, setOpenSignin } = props;
	const classes = useStyles();
	const [ email, setEmail ] = React.useState('');
	const [ loginsuccess, setLoginsuccess ] = React.useState(false);
	const [ password, setPassword ] = React.useState('');
	const [ otpsuccess, setOtpsuccess ] = React.useState(true);
	const [ errMsg, setErrMsg ] = useState('');
	const [ openSignup, setOpenSignup ] = useState(false);

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
		axios
			.post(process.env.REACT_APP_BASEURL + '/api/user/loginUser', {
				email: email.toLowerCase(),
				password: password
			})
			.then(
				(response) => {
					// console.log(response);
					if (response.data.success) {
						Cookies.set('session-id', response.data['token']);
						setOpenSignin(false);
						setLoginsuccess(true);
					}
				},
				(error) => {
					console.log(error.response.data.err);
					if (error.response.data.err === 'User Not Found') {
						setErrMsg('User not found');
					} else if (error.response.data.err.message === 'Incorrect Password') {
						setErrMsg('Incorrect password');
					} else if (error.response.data.err === 'Email Verification Status: False') {
						setOtpsuccess(false);
					}
				}
			);
	};
	if (otpsuccess === false) {
		return (
			<Redirect
				to={{
					pathname: '/verifyotp',
					state: { email: email }
				}}
			/>
		);
	} else {
		return (
			<div>
				<Alert msg={errMsg} type='danger' />
				<div className='row'>
					<div className='col l5 s12 center'>
						<img
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602391920/Theme/2_f5ppw2.png'
							alt='login'
							className='popup-signin-image'
						/>
					</div>
					<div className='col l7 s12 center'>
						<Container component='main' className='signinform-container' maxWidth='md'>
							<CssBaseline />
							<div className={classes.paper}>
								<div className='center'>
									<GoogleLogin
										className='black-text'
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
										<Grid spacing={2} item xs={12}>
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
										</Grid>
										<Grid spacing={2} item xs={12}>
											<TextField
												variant='outlined'
												margin='normal'
												required
												fullWidth
												name='password'
												label='Password'
												type='password'
												id='password'
												value={password}
												onChange={(e) => setPassword(e.target.value)}
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
										Sign In
									</Button>

									<Grid container>
										<Grid item xs>
											<Link href='#' variant='body2' />
										</Grid>
										<Grid item>
											<Link
												onClick={() => {
													setOpenSignup(true);
												}}
												variant='body2'
											>
												{"Don't have an account? Sign Up"}
											</Link>
										</Grid>
									</Grid>
								</form>
							</div>
						</Container>
					</div>
					<Popup title='Signup' openPopup={openSignup} setOpenPopup={setOpenSignup}>
						<SignUp {...props} openSignup={openSignup} setOpenSignup={setOpenSignup} />
					</Popup>
				</div>
			</div>
		);
	}
}
