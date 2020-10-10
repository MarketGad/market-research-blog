import React from 'react';
import FadingLoader from '../Components/FadingLoader';
import { Link } from 'react-router-dom';
import ReputationPoint from './ReputaionPoints';
const PeopleCard = (props) => {
	const user = props.user;
	const linkedIn = props.linkedIn;
	return (
		<div>
			<ul className='collection product-container'>
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
						{user.experience[0] == '' ? "0 - 2 yrs" : user.experience[0]}
						<br />
						<div
							className='secondary-content'
							style={{
								marginTop: '-2%',
								padding: '0 5px',
								borderRadius: '10px'
							}}
						>
							<ReputationPoint ReputationPoint={user.user.reputation} />
						</div>
					</div>
					<div
						className='row'
						style={{
							marginBottom: '5px',
							marginTop: '10px'
						}}
					>
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
const PeopleList = (props) => {
	const showPeople = props.jobProfiles.length ? (
		props.jobProfiles.map((user, i) => {
			if (!/^https?:\/\//.test(user.linkedIn)) {
				let weblink = 'https://' + user.linkedIn;
				return <PeopleCard key={i} user={user} linkedIn={weblink} />;
			} else return <PeopleCard key={i} user={user} linkedIn={user.linkedIn} />;
		})
	) : (
		<div className='center' />
	);
	return (
		<div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
			{props.jobProfiles && <div>{showPeople}</div>}
			{props.jobProfiles.length === 0 && (
				<div>
					<FadingLoader imagetype='circle' loadno={6} />
				</div>
			)}
		</div>
	);
};

export default PeopleList;
