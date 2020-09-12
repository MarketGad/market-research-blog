import React,{ useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../Components/Footer2';
import { Redirect } from 'react-router-dom';
import Alert from '../Components/Alert';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(3),
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

export default function SignUp () {
	const classes = useStyles();
	const [ email, setEmail ] = React.useState('');
	const [ first_name, setFirstName ] = React.useState('');
	const [ last_name, setLastName ] = React.useState('');
	const [ phoneno, setPhoneno ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ confirmPassword, setConfirmPassword ] = React.useState('');
	const [ signupsuccess, setSignupsuccess ] = React.useState(false);
	const [ otpsuccess, setOtpsuccess ] = React.useState(false);
	const [ otp, setOtp ] = React.useState('');
	const [ successMsg, setSuccessMsg ] = useState('');
	const [ errMsg, setErrMsg ] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			axios
				.post('http://localhost:5000/api/user/signupUser', {
					email: email.toLowerCase(),
					password: password,
					phone: phoneno,
					firstname: first_name,
					lastname: last_name
				})
				.then(
					(response) => {
						console.log(response.data.success);
						if (response.data.success === true) {
							setSignupsuccess(true);
						}
					},
					(error) => {
						console.log(error);
					}
				);
		} else {
			setErrMsg('Password Mismatch');
		}
	};
	const otpsubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/user/otpverify', {
				email: email.toLowerCase(),
				otp: otp
			})
			.then(
				(response) => {
					console.log(response);
					if (response.data.success === true) {
						setOtpsuccess(true);
					}
				},
				(error) => {
					console.log(error);
					setErrMsg('Please Check Your OTP again!');
				}
			);
	};
	if (otpsuccess === true) {
		return <Redirect to='/signin' />;
	} else if (signupsuccess === true) {
		return (
			<div>
				<Alert msg={errMsg} type='danger' />
				<Alert msg={successMsg} type='success' />
				<h4 className='center'>Verify Your email</h4>
				<form className={classes.form} onSubmit={otpsubmitHandler}>
					<div className='center' style={{ width: '6%', margin: '0 47%' }}>
						<Grid spacing={2} item xs={12}>
							<TextField
								variant='outlined'
								margin='normal'
								required
								fullWidth
								name='otp'
								label='Enter Otp'
								type='password'
								id='password'
								value={otp}
								onChange={(e) => setOtp(e.target.value)}
							/>
						</Grid>
					</div>

					<div className='center'>
						<Button type='submit' variant='contained' color='primary' className={classes.submit}>
							Verify
						</Button>
					</div>
				</form>
			</div>
		);
	} else {
		return (
			<div>
				<div>
					<Alert msg={errMsg} type='danger' />
					<Alert msg={successMsg} type='success' />
					<Container component='main' maxWidth='xs'>
						<CssBaseline />
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								<PersonAddIcon />
							</Avatar>
							<Typography component='h1' variant='h5'>
								Sign Up
							</Typography>
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
									<Grid item xs={12}>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='phone'
											label='Phone Number'
											name='phone'
											value={phoneno}
											onChange={(e) => setPhoneno(e.target.value)}
										/>
									</Grid>

									<Grid item xs={12}>
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
									<Grid item xs={12}>
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
									<Grid item xs={12}>
										<FormControlLabel
											control={<Checkbox value='allowExtraEmails' color='primary' />}
											label='I want to receive inspiration, marketing promotions and updates via email.'
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
										<Link href='/signin' variant='body2'>
											Already have an account? Sign in
										</Link>
									</Grid>
								</Grid>
							</form>
						</div>
					</Container>
				</div>
				<div style={{ marginTop: '8%' }}>
					<Footer />
				</div>
			</div>
		);
	}
}
