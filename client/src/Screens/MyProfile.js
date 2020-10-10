import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Location from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import ReputationPoint from '../Components/ReputaionPoints';

const MyProfile = (props) => {
	const user = props.location.state.user;
	console.log(user);
	return (
		<div className='myprofile-container'>
			<Grid container component='main'>
				<CssBaseline />
				<Grid item xs={12} md={3}>
					<div className='image' style={{ textAlign: 'center' }}>
						<img
							style={{ margin: '15px', width: '200px', height: '200px', borderRadius: '7px' }}
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiUY7RQ-eUe_fmk6--gEvDXvallGC7ZA7suQ&usqp=CAU'
							alt={user.firstname}
						/>
						<div style={{ padding: '5px' }}>
							<span>
								<ReputationPoint ReputationPoint={user.reputation} />
							</span>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} md={4}>
					<div className='article-subhead center'>
						<div>
							{user.firstname} {user.lastname}
						</div>
					</div>
					<div className='center propic' style={{ padding: '10px', fontSize: '1.3em' }}>
						<span>
							<span className='material-icons job-link-icons'>
								<MailIcon />
							</span>
							<span>
								<a className='links' href='#'>
									{user.email}
								</a>
							</span>
						</span>
					</div>
					{/* <div className='propic' style={{ textAlign: 'center', fontWeight: '800' }}>
						<h5>
							<span className='material-icons job-link-icons'>
								<Location />
							</span>
							<span style={{ verticalAlign: 'middle' }}>Hyderabad</span>
						</h5>
					</div> */}
					{/* <div style={{ textAlign: 'center', fontWeight: '800' }}>
							<h6>
								
								<span style={{ verticalAlign: 'middle' }}>Book-nerd</span>
							</h6>
						</div> */}
					{/* <div style={{ textAlign: 'center', fontWeight: '800' }}>
						<div className='profile-section'>
							<p className='product-subhead'>Bio</p>
							<p className='product-content'>La vie est belle</p>
						</div>
					</div> */}
				</Grid>
			</Grid>
		</div>
	);
};

export default MyProfile;
