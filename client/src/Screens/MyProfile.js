import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Location from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import ReputationPoint from '../Components/ReputaionPoints';
import Cookies from 'js-cookie';
import ThreeDotLoad from '../Components/ThreeDotLoad';
import { Link } from 'react-router-dom';
import Popup from '../Components/Popup';
import EditProfile from './EditProfile';

const MyProfile = (props) => {
	const [ user, setUser ] = useState('');
	const [ openEdit, setOpenEdit ] = useState(false);
	const id = props.match.params.profile_id;
	const cookie = Cookies.get('session-id') || '';

	const loadUser = async () => {
		const config = {
			headers: {
				Authorization: `Bearer ${cookie}`
			}
		};
		try {
			const res = await fetch(process.env.REACT_APP_BASEURL + '/api/user/' + id);
			const response = await res.json();
			setUser(response.user);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		loadUser();
	}, []);
	if (user._id) {
		return (
			<div className='myprofile-container'>
				<Grid container component='main'>
					<CssBaseline />
					<Grid item xs={12} md={3}>
						<div className='image' style={{ textAlign: 'center' }}>
							{user.profilePic && (
								<img
									style={{ margin: '15px', width: '200px', height: '200px', borderRadius: '7px' }}
									src={user.profilePic}
									alt={user.firstname}
								/>
							)}
							{!user.profilePic && (
								<img
									style={{ margin: '15px', width: '200px', height: '200px', borderRadius: '7px' }}
									src={
										'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiUY7RQ-eUe_fmk6--gEvDXvallGC7ZA7suQ&usqp=CAU'
									}
									alt={user.firstname}
								/>
							)}

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
						{id === JSON.parse(atob(cookie.split('.')[1]))._id && (
							<div className='center'>
								<Link onClick={() => setOpenEdit(true)}>Update your profile</Link>
							</div>
						)}
					</Grid>
				</Grid>
				<Popup openPopup={openEdit} setOpenPopup={setOpenEdit}>
					<EditProfile user={user} openEdit={openEdit} setOpenSignin={setOpenEdit} />
				</Popup>
			</div>
		);
	} else {
		return (
			<div className='center'>
				<ThreeDotLoad />
			</div>
		);
	}
};

export default MyProfile;
