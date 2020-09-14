import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
import Footer2 from '../Components/Footer2';
import MailIcon from '@material-ui/icons/Mail';

const DisplayArray = (props) => {
	// console.log("inside display array")
	// console.log(props.data);

	if(props.data){
		const showdata = props.data.map((data) => {
			if(data){
				return <div>{data}</div>
			}else {
				return <div></div>
			}
		})
		return <div>{showdata}</div>

	} else {
		return <div className='center'> No relevent data  :( </div>
		
	}
}

const JobProfile = (props) => {
	let id = props.match.params.job_id;
	const [ UserProfile, setUser ] = React.useState('');

	const loadProducts = async () => {
		try {
			const res = await fetch('http://localhost:5000/api/jobprofiles/' + id);
			// console.log(res);
			const data = await res.json();
			setUser(data);
			// console.log(data.user.email);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);
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
			<div>
				{' '}
				<Grid container component='main'>
					<CssBaseline />
					<Grid item xs={12} md={3}>
						<div style={{ textAlign: 'center' }}>
							<img
								src={UserProfile.profilePic}
								alt={UserProfile.user.firstname}
								style={{ width: '200px', height: '200px', borderRadius: '7px', marginTop: '17%' }}
							/>
						</div>
						<div
							className='article-subhead'
							style={{ fontFamily: 'GlacialIndifferenceBold', textAlign: 'center' }}
						>
							{UserProfile.user.firstname} {UserProfile.user.lastname}
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
									{UserProfile.rating}
								</span>
							</span>
						</div>
						<div style={{ textAlign: 'center', fontFamily: 'GlacialIndifferenceBold' }}>
							<h6>
								<span
									style={{
										position: 'relative',
										padding: '0 5px',
										// top: '2px',
										verticalAlign: 'middle',
									}}
									className='material-icons'
								>
									location_on
								</span>
								{UserProfile.location}
							</h6>
						</div>
						<div
							style={{
								fontSize: '1.5em',
								marginLeft: '15%',
								marginTop: '15%'
							}}
						>
							<div style={{ padding: '3px' }}>
								<span>
									<span
										style={{
											position: 'relative',
											padding: '0 10px',
											// top: '-4px',
											verticalAlign: 'middle',
											fontSize: 'large'
										}}
										className='material-icons'
									>
										<MailIcon fontSize="large"/>
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
									<span
										style={{
											position: 'relative',
											padding: '0 10px',
											// top: '-3px',
											verticalAlign: 'middle',
										}}
										className='material-icons'
									>
										<LinkIcon  fontSize="large"/>
									</span>
									<span>
										<a className='links' href={UserProfile.portfolioLink}>
											Portfolio
										</a>
									</span>
								</span>
							</div>
							<div
								style={{
									padding: '3px'
								}}
							>
								<span
									style={{
										position: 'relative',
										top: '-4px',
										padding: '0 10px',
										verticalAlign: 'middle',
									}}
									className='material-icons'
								>
									<LinkedInIcon fontSize="large"/>
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
						<div style={{ margin: '10% ' }}>
							<div style={{ padding: '3px 0' }}>
								<p className='product-subhead'>Skills</p>
								<p className='product-content'>
									<DisplayArray data={UserProfile.skills} />
								</p>
							</div>
							<div style={{ padding: '3px 0' }}>
								<p className='product-subhead'>Experience</p>
								<p className='product-content'>
									<DisplayArray data={UserProfile.experience} />
								</p>
							</div>
							<div style={{ padding: '3px 0' }}>
								<p className='product-subhead'>Qualifications</p>
								<p className='product-content'>
									<DisplayArray data={UserProfile.qualification} />
								</p>
							</div>
							<div style={{ padding: '3px 0' }}>
								<p className='product-subhead'>Passionate About</p>
								<p className='product-content'>
								<DisplayArray data={UserProfile.passionateAbout} />
								</p>
							</div>
						</div>
					</Grid>

					<Grid item xs={12} sm={12} md={3} elevation={6} square>
						<div style={{ padding: '5%' }}>
							<div style={{ marginTop: '20%' }}>
								<h3 className='product-head center'>Premium Offerings</h3>
							</div>
							<div style={{ textAlign: 'center', marginTop: '10%' }}>
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
