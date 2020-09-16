import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Location from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import Footer2 from '../Components/Footer2';
import MailIcon from '@material-ui/icons/Mail';

const DisplayArray = (props) => {
	if (props.data) {
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
	let id = props.match.params.job_id;
	const UserProfile = props.location.state.UserProfile;
	if (UserProfile.err) {
		return (
			<div>
				<h1 style={{ marginTop: '20vh' }} className='center'>
					Error 404
				</h1>
				<h3 className='center'>Job profile not found !!!</h3>
			</div>
		);
	} else if (UserProfile.user)
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
						<div className='article-subhead center' style={{ fontFamily: 'GlacialIndifferenceBold' }}>
							{UserProfile.user.firstname} {UserProfile.user.lastname}
						</div>
						<div style={{ textAlign: 'center', fontFamily: 'GlacialIndifferenceBold' }}>
							<h6>
								<span className='material-icons job-link-icons'>
									<Location />
								</span>
								<span style={{ verticalAlign: 'middle' }}>{UserProfile.location}</span>
							</h6>
						</div>
						<div style={{ textAlign: 'center' }}>
							<span style={{ textAlign: 'center' }}>
								<span
									style={{
										position: 'relative',
										padding: '0 5px',
										fontSize: '1.4em',
										verticalAlign: 'middle',
										color: '#ff9529'
									}}
									className='material-icons'
								>
									fiber_manual_record
								</span>
								<span
									style={{
										fontFamily: 'GlacialIndifferenceBold',
										fontSize: '1.4em',
										verticalAlign: 'middle'
									}}
								>
									{UserProfile.user.reputation}
								</span>
							</span>
						</div>
						<div className='link-container'>
							<div style={{ padding: '3px' }}>
								<span>
									<span className='material-icons job-link-icons'>
										<MailIcon />
									</span>
									<span>
										<a className='links' href='#'>
											{UserProfile.user.email}
										</a>
									</span>
								</span>
							</div>
							<div style={{ padding: '3px' }}>
								<span>
									<span className='material-icons job-link-icons'>
										<LinkIcon />
									</span>
									<span>
										<a className='links' href={UserProfile.portfolioLink}>
											{UserProfile.portfolioLink}
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
									<a className='links' href={UserProfile.linkedIn}>
										<span>LinkedIn</span>
									</a>
								</span>
							</div>
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
									<DisplayArray data={UserProfile.experience} />
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
									<p className='product-content'>Rs.{UserProfile.offeringPrice || null}</p>
								</div>
								<a
									className='waves-effect waves-light btn-small hirenow-btn'
									style={{ marginTop: '2%' }}
								>
									Hire Now
								</a>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	else return <div className='center'>Loading... </div>;
};

export default JobProfile;
