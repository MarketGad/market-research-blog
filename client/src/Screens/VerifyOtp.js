import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Alert from '../Components/Alert';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const VerifyOtp = (props) => {
	const classes = useStyles();
	const email = props.location.state.email;
	const [ otpsuccess, setOtpsuccess ] = React.useState(false);
	const [ otp, setOtp ] = React.useState('');
	const [ successMsg, setSuccessMsg ] = useState('');
	const [ errMsg, setErrMsg ] = useState('');

	const otpsubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post(process.env.REACT_APP_BASEURL + '/api/user/otpverify', {
				email: email.toLowerCase(),
				otp: otp
			})
			.then(
				(response) => {
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
	} else {
		return (
			<div>
				<Alert msg={errMsg} type='danger' />
				<Alert msg={successMsg} type='success' />
				<h4 className='center'>Verify Your email</h4>
				<form className={classes.form} onSubmit={otpsubmitHandler}>
					<div className='center' style={{ width: 'auto', margin: 'auto' }}>
						<Grid spacing={2} item xs={12}>
							<TextField
								variant='outlined'
								margin='normal'
								required
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
	}
};

export default VerifyOtp;
