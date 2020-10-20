import React from 'react';
import OtpInput from 'react-otp-input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '20ch'
		},
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
	}
}));

export default function GetOtp () {
	const classes = useStyles();

	return (
		<div>
			<div
				className='col l6 s12'
				style={{
					backgroundColor: 'white',
					height: '300px' /*,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/
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
					We've sent a 6-digital code to <a href='#'>id@email.com</a> The code expires shortly, so please
					enter it soon.
				</div>

				<div
					className='center'
					style={{
						margin: '0% 30% 0% 34%' /* ,border:'1px solid',*/
					}}
				>
					<OtpInput
						inputStyle={{
							border: '2px solid gray',
							borderRadius: '5px'
						}}
						// value={this.state.otp}
						// onChange={this.handleChange}
						numInputs={6}
						separator={<span>-</span>}
					/>
				</div>
				<div
					className='center'
					style={{
						fontSize: '1.4em',
						fontFamily: 'Bahnschrift',
						color: '#87879f',
						marginBottom: '2%',
						padding: '2% 17% 0% 17%'
					}}
				>
					Can't find your code? Check your spam folder.
				</div>
			</div>
		</div>
	);
}
