import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import OtpComponent from '../Components/OtpComponent';
import ThreeOtpLoad from '../Components/ThreeDotLoad';

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
	const { openOtp, setOpenOtp, setOpenSignin, setOpenSignup, email } = props;
	const [ otpsuccess, setOtpsuccess ] = React.useState(false);
	const [ otp, setOtp ] = React.useState('');
	const [ load, setload ] = useState('');
	const [ errMsg, setErrMsg ] = useState('');
	const otpsubmitHandler = (e) => {
		e.preventDefault();
		setload(true);
		axios
			.post(process.env.REACT_APP_BASEURL + '/api/user/otpverify', {
				email: email.toLowerCase(),
				otp: otp
			})
			.then(
				(response) => {
					if (response.data.success === true) {
						setOtpsuccess(true);
						setOpenOtp(false);
						setOpenSignup(false);
					}
				},
				(error) => {
					console.log(error);
					setload(false);
					setErrMsg('Please Check Your OTP again!');
				}
			);
	};
	if (load === true) {
		return <ThreeOtpLoad />;
	}
	return (
		<div
			className='col l6 s12 center'
			style={{
				backgroundColor: 'white'
				/*,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/
			}}
		>
			<div
				className='center'
				style={{
					fontSize: '1.6em',
					fontFamily: 'Bahnschrift',
					color: 'darkblue',
					padding: '0% 10% 3% 10%'
				}}
			>
				Check your e-mail for a code
			</div>
			<div
				className='center'
				style={{
					fontSize: '1.4em',
					fontFamily: 'Bahnschrift',
					color: '#87879f',
					marginBottom: '2%',
					padding: '0% 17% 0% 17%'
				}}
			>
				We've sent a 6-digital code to <a style={{ color: 'darkblue' }}>{email}</a> The code expires shortly, so
				please enter it soon.
			</div>

			<div
				className='center'
				style={{
					margin: '0% 32%'
				}}
			>
				<OtpComponent setOtp={setOtp} />
			</div>
			<div
				className='center'
				style={{
					fontSize: '1.4em',
					fontFamily: 'Bahnschrift',
					color: '#87879f',
					marginBottom: '1%',
					padding: '2% 17% 0% 17%'
				}}
			>
				Can't find your code? Check your spam folder.
			</div>
			<div className='center' style={{ textAlign: 'center' }}>
				<div
					onClick={otpsubmitHandler}
					class='btn-small'
					style={{
						backgroundColor: '#1e4a72',
						color: 'white',
						border: 'none',
						margin: '20px 0',
						borderRadius: '15px',
						paddingLeft: '7%',
						paddingRight: '7%'
					}}
				>
					Submit
				</div>
			</div>
		</div>
	);
};

export default VerifyOtp;
