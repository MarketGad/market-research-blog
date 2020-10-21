import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class Otp extends Component {
	state = { otp: '' };

	handleChange = (otp) => {
		this.setState({ otp });
		this.props.setOtp(otp);
	};

	render () {
		return (
			<OtpInput
				inputStyle={{
					border: '2px solid gray',
					borderRadius: '5px'
				}}
				value={this.state.otp}
				onChange={this.handleChange}
				numInputs={6}
				separator={<span>-</span>}
			/>
		);
	}
}
