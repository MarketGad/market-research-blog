import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const PeopleList = () => {
	const [ people, setPeople ] = React.useState('');

	const loadProducts = async () => {
		try {
			const res = await fetch('http://localhost:5000/api/jobprofiles');
			const data = await res.json();
			setPeople(data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);

	const showPeople = people.length ? (
		people.map((user) => {
			const cookie = Cookies.get('session-id');
			console.log(cookie);
			if (user.user) {
				return (
					<div>
						<ul className='collection'>
							<li className='collection-item avatar'>
								<img src={user.profilePic} alt='' className='circle' />
								<a className='title' href={'/' + user._id}>
									<b>
										{user.user.firstname} {user.user.lastname}
									</b>
								</a>
								<p>
									<b>Skills: </b>
									{user.skills}
									<br />
									<b>Experience: </b>
									{user.experience}
									<br />
									<div
										className='secondary-content'
										style={{
											marginTop: '-2%',
											padding: '0 5px',
											borderRadius: '10px'
										}}
									>
										<span
											style={{
												position: 'relative',
												padding: '2px',
												fontSize: '12px',
												color: '#ff9529'
											}}
											className='material-icons'
										>
											fiber_manual_record
										</span>
										<span style={{ fontSize: '16px', padding: '1px', fontWeight: '600' }}>
											{user.rating}
										</span>
									</div>
								</p>

								<a
									href={'/' + user._id}
									className='waves-effect waves-light btn-small hire-connect-btn'
								>
									Hire
								</a>
								<a
									className='waves-effect waves-light btn-small hire-connect-btn'
									style={{ float: 'right' }}
									href={user.linkedIn}
								>
									Connect
								</a>
							</li>
						</ul>
					</div>
				);
			} else return <div className='center'>Something went wrong... </div>;
		})
	) : (
		<div className='center'>Loading... </div>
	);
	return <div>{showPeople}</div>;
};

export default PeopleList;
