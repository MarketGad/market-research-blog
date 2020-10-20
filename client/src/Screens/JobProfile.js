import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Location from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import MailIcon from '@material-ui/icons/Mail';
import HireNow from '../Components/HireNow';
import ReputationPoint from '../Components/ReputaionPoints';
import ThreeDotLoad from '../Components/ThreeDotLoad';
import { Link } from 'react-router-dom';

const DisplayArray = (props) => {
	if (props.data.length !== 0) {
		const showdata = props.data.map((data) => {
			if (data) {
				return <div>{data}</div>;
			} else {
				return <div />;
			}
		});
		return <div>{showdata}</div>;
	} else {
		return <div className='center'> No relevent data :( </div>;
	}
};

const JobProfile = (props) => {
	const id = props.match.params.job_id;
	const UserProfile = props.jobProfiles.find((item) => item._id === id);
	let linkedin = '';
	let portfolioLink = '';
	if (UserProfile) {
		linkedin = /^https?:\/\//.test(UserProfile.linkedIn) ? UserProfile.linkedIn : 'https://' + UserProfile.linkedIn;
		portfolioLink = /^https?:\/\//.test(UserProfile.portfolioLink)
			? UserProfile.portfolioLink
			: 'https://' + UserProfile.portfolioLink;
	}

	// 	if (!) {
	// let linkedin = 'https://' + UserProfile.linkedIn;
	// 	}

	// 	else{
	// 		let linkedin= UserProfile.linkedIn;
	// 	}

	// 	if (!/^https?:\/\//.test(UserProfile.portfolioLink)) {
	// let portfolio = 'https://' + UserProfile.portfolioLink;
	// 	}

	// 	else
	// 		let portfolio= UserProfile.portfolioLink;

	if (UserProfile)
		return (
			<div className='profile-container'>
				<Grid container component='main'>
					<CssBaseline />
					<Grid item xs={12} md={3}>
						<div style={{ textAlign: 'center' }}>
							<img
								src={UserProfile.profilePic}
								alt={UserProfile.user.firstname}
								style={{ width: '200px', height: '200px', borderRadius: '7px' }}
							/>
						</div>
						<div className='article-subhead center' style={{ fontWeight: '800' }}>
							{UserProfile.user.firstname} {UserProfile.user.lastname}
						</div>
						<div style={{ textAlign: 'center', fontWeight: '800' }}>
							<h6>
								<span className='material-icons job-link-icons'>
									<Location />
								</span>
								<span style={{ verticalAlign: 'middle' }}>{UserProfile.location}</span>
							</h6>
						</div>
						<div style={{ textAlign: 'center' }}>
							<span style={{ textAlign: 'center' }}>
								<ReputationPoint ReputationPoint={UserProfile.user.reputation} />
							</span>
						</div>
						<div className='link-container'>
							<div style={{ padding: '3px' }}>
								<span>
									<span className='material-icons job-link-icons'>
										<MailIcon />
									</span>
									<span>
										<a className='links' MAILTO={UserProfile.user.email}>
											{UserProfile.user.email}
										</a>
									</span>
								</span>
							</div>
							<div
								style={{
									padding: '3px'
								}}
							>
								<span className='material-icons job-link-icons'>
									<LinkedInIcon />
								</span>
								<span>
									<a target='_blank' rel='noopener noreferrer' className='links' href={linkedin}>
										<span>LinkedIn</span>
									</a>
								</span>
							</div>
							{UserProfile.portfolioLink.length > 0 && (
								<div style={{ padding: '3px' }}>
									<span>
										<span className='material-icons job-link-icons'>
											<LinkIcon />
										</span>
										<span>
											<a
												target='_blank'
												rel='noopener noreferrer'
												className='links'
												href={portfolioLink}
											>
												<span>{UserProfile.portfolioLink}</span>
											</a>
										</span>
									</span>
								</div>
							)}
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={6} elevation={6} square>
						<div className='job-userdetails-container'>
							<div className='profile-section'>
								<p className='product-subhead'>Skills</p>
								<p className='product-content'>
									<DisplayArray data={UserProfile.skills} />
								</p>
							</div>
							<div className='profile-section'>
								<p className='product-subhead'>Experience</p>
								<p className='product-content'>
									<DisplayArray
										data={
											UserProfile.experience[0] === '' ? (
												[ 'Fresher', '0 - 2 yrs' ]
											) : (
												UserProfile.experience
											)
										}
									/>
								</p>
							</div>
							<div className='profile-section'>
								<p className='product-subhead'>Qualifications</p>
								<p className='product-content'>
									<DisplayArray data={UserProfile.qualification} />
								</p>
							</div>
							<div className='profile-section'>
								<p className='product-subhead'>Passionate About</p>
								<p className='product-content'>
									<DisplayArray data={UserProfile.passionateAbout} />
								</p>
							</div>
						</div>
					</Grid>
					{UserProfile.serviceName && (
						<Grid item xs={12} sm={12} md={3} elevation={6} square>
							<div className='premium-offering-container'>
								<div>
									<h3 className='product-head center'>Premium Offerings</h3>
								</div>
								<div style={{ textAlign: 'center', marginTop: '3%' }}>
									<div style={{ padding: '5px' }}>
										<p className='product-subhead'>Services</p>
										<p className='product-content'>{UserProfile.serviceName || null}</p>
									</div>
									<div style={{ padding: '5px' }}>
										<p className='product-subhead'>Pricing</p>
										<p className='product-content'>Rs.{UserProfile.offeringPrice / 100 || null}</p>
									</div>
									<HireNow profile={UserProfile} />
								</div>
							</div>
						</Grid>
					)}
				</Grid>
			</div>
		);
	else
		return (
			<div className='center'>
				<ThreeDotLoad />
			</div>
		);
};

export default JobProfile;
