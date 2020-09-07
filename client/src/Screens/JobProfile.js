import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkIcon from '@material-ui/icons/Link';

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
			userQualification: 'Lorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, Lorem',
			userGrade: '5'
		},
		{
			userName: 'Example Name',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem',
			userQualification: 'Lorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, Lorem',
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
			userQualification: 'Lorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, Lorem',
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
			userQualification: 'Lorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, Lorem',
			userGrade: '9'
		}
	];

	let id = props.match.params.job_id;
	const user = people[id];
	return (
		<Grid container component='main'>
			<CssBaseline />
			<Grid item xs={false} xs={12} md={3}>
				<div style={{ textAlign: 'center' }}>
					<img
						src={user.userImage}
						alt={user.userName}
						style={{ width: '200px', height: '200px', borderRadius: '7px', marginTop: '17%' }}
					/>
				</div>
				<div className='article-subhead' style={{ fontFamily: 'GlacialIndifferenceBold', textAlign: 'center' }}>
					{user.userName}
					<span style={{ textAlign: 'center' }}>
						<span
							style={{
								marginLeft: '20px',
								position: 'relative',
								padding: '5px',
								fontSize: '16px',
								color: '#ff9529'
							}}
							className='material-icons'
						>
							fiber_manual_record
						</span>
						<span style={{ fontFamily: 'GlacialIndifferenceBold', fontSize: '25px' }}>
							{user.userGrade}
						</span>
					</span>
				</div>
				<div style={{ textAlign: 'center', fontFamily: 'GlacialIndifferenceBold' }}>
					<h6>{user.userLocation}</h6>
				</div>
				<div
					style={{
						fontSize: '1.5em',
						fontFamily: 'GlacialIndifferenceMedium',
						margin: '10% 30%'
					}}
				>
					<div style={{ padding: '3px' }}>
						<span>
							<span
								style={{
									position: 'relative',
									padding: '0 10px',
									top: '3px'
								}}
								className='material-icons'
							>
								mail
							</span>
							<span>
								<a style={{ color: 'black' }} href='#'>
									{user.userEmail}
								</a>
							</span>
						</span>
					</div>
					<div style={{ padding: '3px' }}>
						<span>
							<span
								style={{
									position: 'relative',
									padding: '0 10px',
									top: '4px'
								}}
								className='material-icons'
							>
								<LinkIcon />
							</span>
							<span>
								<a style={{ color: 'black' }} href='#'>
									Website
								</a>
							</span>
						</span>
					</div>
					<div style={{ padding: '3px' }}>
						<span
							style={{
								position: 'relative',
								top: '3px',
								padding: '0 10px'
							}}
							className='material-icons'
						>
							<LinkedInIcon />
						</span>
						<span>
							<a style={{ color: 'black' }} href='!#'>
								Linkedin
							</a>
						</span>
					</div>
				</div>
			</Grid>
			<Grid item xs={12} sm={12} md={9} elevation={6} square>
				<div style={{ margin: '7%' }}>
					<p className='article-subhead'>
						<b>Skills</b>
					</p>
					<p className='article-content'>{user.userSkills}</p>
					<p className='article-subhead'>
						<b>Experience</b>
					</p>
					<p className='article-content'>{user.userExperience}</p>
					<p className='article-subhead'>
						<b>Qualifications</b>
					</p>
					<p className='article-content'>{user.userQualification}</p>
					<p className='article-subhead'>
						<b>Passionate About</b>
					</p>
					<p className='article-content'>{user.userDesc}</p>
				</div>
			</Grid>
		</Grid>
	);
};

export default JobProfile;
