import React, { useState } from 'react';
import axios from 'axios';
import OtpComponent from '../Components/OtpComponent';
import ThreeOtpLoad from '../Components/ThreeDotLoad';

const VerifyOtp = (props) => {
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
		return (
			<div className='center'>
				<ThreeOtpLoad />
			</div>
		);
	}
	return (
		<div className='center otp-body'>
			<div className='otp-t1'>Check your e-mail for a code</div>
			<div className='center otp-t2'>
				We've sent a 6-digital code to <a style={{ color: 'darkblue' }}>{email}</a> The code expires shortly, so
				please enter it soon.
			</div>
			<div className='otp-input-part'>
				<OtpComponent setOtp={setOtp} />
			</div>
			<div className='center otp-t3'>Can't find your code? Check your spam folder.</div>
			<div className='center'>
				<div
					onClick={otpsubmitHandler}
					class='btn-small waves-effect waves-teal'
					style={{
						backgroundColor: '#1e4a72',
						color: 'white',
						margin: '20px 0',
						borderRadius: '8px',
						padding: '0 20px'
					}}
				>
					Submit
				</div>
			</div>
		</div>
	);
};

export default VerifyOtp;
