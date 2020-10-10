import React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function loadScript (src) {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}
const __DEV__ = document.domain === 'localhost';
const HireNow = (props) => {
	const [ readytohire, setReadytohire ] = React.useState('');
	// const [ paymentsuccess, setpaymentsuccess ] = React.useState('');
	const token = Cookies.get('session-id');
	const hiresuccess = (id) => {
		console.log(id);
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		axios.post(process.env.REACT_APP_BASEURL + '/api/jobprofiles/hire/' + props.profile._id, {}, config).then(
			(response) => {
				alert(
					'payment success\n' + 'Your payment id is: ' + id.razorpay_payment_id + '\nWe will contact you soon'
				);
			},
			(error) => {
				console.log(error);
				alert('something went wrong');
			}
		);
	};
	async function displayRazorpay () {
		if (!token) {
			setReadytohire(false);
			return;
		}
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?');
			return;
		}
		const data = await fetch(process.env.REACT_APP_BASEURL + '/api/payment/razorpay/' + props.profile._id, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: {}
		}).then((t) => t.json());
		const options = {
			key: __DEV__ ? process.env.REACT_APP_RAZORPAY_ID : process.env.REACT_APP_RAZORPAY_ID,
			currency: data.currency,
			amount: data.amount,
			order_id: data.id,
			name: props.profile.user.firstname + props.profile.user.lastname,
			description: 'Thank you for hiring',
			image:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1600260487/Product_Profiles/logo/MarketGad%205f620819ea33410004b6c10c.jpg',
			handler: function (response) {
				hiresuccess(response);
			},
			prefill: {
				name: '',
				email: '',
				phone_number: ''
			}
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}
	if (readytohire === false) return <Redirect to='/signin' />;
	else
		return (
			<div>
				<a
					onClick={displayRazorpay}
					target='_blank'
					rel='noopener noreferrer'
					className='waves-effect waves-light btn-small hirenow-btn'
					style={{ marginTop: '2%' }}
				>
					Hire Now
				</a>
			</div>
		);
};

export default HireNow;
