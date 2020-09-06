import React from 'react';
const JobProfile = (props) => {
	const people = [
		{
			userName: 'Anonymous User',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem. 1+ years of exeperience in so and so',
			userGrade: '5'
		},
		{
			userName: 'Anonymous User',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem',
			userGrade: '6'
		},
		{
			userName: 'Anonymous User',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
			userGrade: '7'
		},
		{
			userName: 'Anonymous User',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
			userGrade: '9'
		}
	];
	let id = props.match.params.job_id;
	const user = people[id];
	return (
		<div>
			<div className='container' style={{ textAlign: 'center' }}>
				<div style={{ paddingTop: '2%', paddingBottom: '2%' }}>
					<img
						src={user.userImage}
						alt={user.userName}
						style={{ width: '150px', height: '150px', borderRadius: '10px' }}
					/>
					<div
						className='article-subhead'
						style={{ color: '#0153a5', fontFamily: 'GlacialIndifferenceBold' }}
					>
						{user.userName}
						<div
							style={{
								display: 'inline',
								marginLeft: '30px',
								padding: '0 10px'
							}}
						>
							<span
								style={{
									position: 'relative',
									padding: '5px',
									fontSize: '16px',
									color: '#ff9529'
								}}
								className='material-icons'
							>
								fiber_manual_record
							</span>
							<span style={{ fontSize: '.7em', fontWeight: '600' }}>{user.userGrade}</span>
						</div>
					</div>
					<div className='article-content'>
						<b>Expertise Skills :</b>
						<br /> {user.userSkills}
					</div>
					<div className='article-content'>
						<b>Description :</b>
						<br /> {user.userDesc}
					</div>
					<div className='article-content'>
						<b>Location :</b>
						<br /> {user.userLocation}
					</div>
					<div className='article-content'>
						<b>Experiences :</b>
						<br /> {user.userExperience}
					</div>
					<div>
						<a className='waves-effect waves-light btn hire-btn1' style={{ margin: '2%' }}>
							Hire
						</a>
						<a
							className='waves-effect waves-light btn hire-btn1'
							style={{ margin: '2%', display: 'inline-block' }}
						>
							Connect
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobProfile;
