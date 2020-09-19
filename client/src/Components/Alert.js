import React, { useState, useEffect } from 'react';

export default function Alert ({ msg, type }) {
	const [ show, setShow ] = useState(false);
	useEffect(
		() => {
			if (msg) {
				setShow(true);
				if (msg !== 'Please Check Your OTP again!') {
					window.location.reload(false);
				}
				setInterval(() => {
					setShow(false);
				}, 5000);
			}
		},
		[ msg ]
	);
	return <div>{show && <div className={`alert alert-${type}`}>{msg}</div>}</div>;
}
