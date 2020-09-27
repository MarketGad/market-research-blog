import React, { useEffect } from 'react';
import FadingLoader from '../Components/FadingLoader';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
const PeopleCard = (props) => {
	const user = props.user;
	const linkedIn = props.linkedIn;
	return (
		<div>
			<ul className='collection'>
				<li className='collection-item avatar'>
					<img src={user.profilePic} alt='' className='circle' />
					<Link
						style={{ color: 'black' }}
						className='title'
						to={{
							pathname: `/${user._id}`,
							state: { UserProfile: user, linkedIn: linkedIn }
						}}
					>
						<b>
							{user.user.firstname} {user.user.lastname}
						</b>
					</Link>

					<div>
						<b>Skills: </b>
						{user.skills[0]}
						<br />
						<b>Experience: </b>
						{user.experience[0]}
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
							<Tooltip title='Reputation Points i.e Likes: 1 Comments:4)' placement='right-start'>
								<span style={{ fontSize: '16px', padding: '1px', fontWeight: '600' }}>
									{user.user.reputation}
								</span>
							</Tooltip>
						</div>
					</div>
					<div className='row' style={{ marginBottom: '5px' }}>
						<div className='col s6'>
							<Link
								className='waves-effect waves-light btn-small hire-connect-btn'
								to={{
									pathname: `/${user._id}`,
									state: { UserProfile: user, linkedIn: linkedIn }
								}}
							>
								Hire
							</Link>
						</div>
						<div className='col s6'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='waves-effect waves-light btn-small hire-connect-btn'
								style={{ float: 'right' }}
								href={linkedIn}
							>
								Connect
							</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};
const PeopleList = () => {
	const [ people, setPeople ] = React.useState('');

	const loadProducts = async () => {
		try {
			const res = await fetch('http://localhost:5000/api/jobprofiles');
			const data = await res.json();
			setPeople(data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);
	const showPeople = people.length ? (
		people.map((user, i) => {
			if (!/^https?:\/\//.test(user.linkedIn)) {
				let weblink = 'https://' + user.linkedIn;
				return <PeopleCard key={i} user={user} linkedIn={weblink} />;
			} else return <PeopleCard key={i} user={user} linkedIn={user.linkedIn} />;
		})
	) : (
		<div className='center'>Loading... </div>
	);
	return (
		<div>
			{people && <div>{showPeople}</div>}
			{!people && (
				<div>
					<FadingLoader imagetype='circle' />
				</div>
			)}
		</div>
	);
};

export default PeopleList;
