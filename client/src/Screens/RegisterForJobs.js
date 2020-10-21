import React from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import ThreeDotLoad from '../Components/ThreeDotLoad';
import SignIn from '../Screens/signin';
import Popup from '../Components/Popup';

function Copyright () {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				marketgad.com
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		color: '#080808d9',
		backgroundColor: 'transparent',
		fontSize: '48vw'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(4, 0, 2),
		padding: '5px',
		fontWeight: '800',
		fontSize: '1.4em',
		letterSpacing: '0.1em'
	},
	chip: {
		padding: '10px',
		borderRadius: '5px',
		fontWeight: '900',
		fontSize: '1.2em',
		letterSpacing: '.07em'
	}
}));

export default function RegisterForJobs () {
	const classes = useStyles();
	const LoginCheck = Cookies.get('session-id');
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const [ fileInputState, setFileInputState ] = React.useState('');
	const [ previewSource, setPreviewSource ] = React.useState('');
	const [ RegisterJobSuccess, setRegisterJobSuccess ] = React.useState(false);
	const [ passionate, setPassionate ] = React.useState('');
	const [ qualification, setQualification ] = React.useState('');
	const [ linkedIn, setlinkedin ] = React.useState('');
	const [ skills, setSkills ] = React.useState('');
	const [ portfolio, setPortfolio ] = React.useState('');
	const [ experience, setExperience ] = React.useState('');
	const [ location, setLocation ] = React.useState('');
	const [ service, setService ] = React.useState('');
	const [ price, setPrice ] = React.useState('');
	const [ load, setLoad ] = React.useState('');
	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
		setFileInputState(e.target.value);
	};

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const token = Cookies.get('session-id');
		if (!token) {
			setOpenSignin(true);
			return;
		}
		const config = {
			headers: {
				Authorization: `Bearer  ${token}`
			}
		};
		const data = {
			skills: skills,
			location: location,
			experience: experience,
			qualification: qualification,
			passionateAbout: passionate,
			portfolioLink: portfolio,
			linkedIn: linkedIn,
			rating: '1',
			serviceName: service,
			offeringPrice: price,
			profilePic: previewSource
		};
		setLoad(true);
		axios.post(process.env.REACT_APP_BASEURL + '/api/jobprofiles', data, config).then(
			(response) => {
				if (response.status === 200) {
					setRegisterJobSuccess(true);
					setLoad(false);
				} else {
					alert(response.err);
				}
			},
			(error) => {
				if (error.message === 'Request failed with status code 413') {
					alert('upload photo size should be less than 500kb');
				} else {
					alert('One user can register once');
					window.location.reload(false);
				}
			}
		);
	};
	if (RegisterJobSuccess) {
		return <Redirect to='/' />;
	} else if (load === true) {
		return (
			<div style={{ textAlign: 'center' }}>
				<ThreeDotLoad />
			</div>
		);
	} else {
		return (
			<div>
				<div>
					<Container component='main' maxWidth='sm'>
						<CssBaseline />
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								<span style={{ fontSize: '26px' }} class='material-icons'>
									work
								</span>
							</Avatar>
							<Typography
								component='h2'
								variant='h5'
								style={{
									marginBottom: '20px'
								}}
							>
								<div className='product-content'>Register Yourself For Jobs</div>
							</Typography>
							<form className={classes.form} onSubmit={submitHandler}>
								<Grid container spacing={2}>
									{previewSource && (
										<img
											src={previewSource}
											alt='chosen'
											style={{
												width: '40%',
												height: '150px',
												textAlign: 'center',
												margin: '0 30%'
											}}
										/>
									)}
									<Grid item xs={12} sm={6}>
										<Chip
											className={classes.chip}
											label='Upload Picture'
											color='primary'
											icon={<CloudUploadIcon />}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<input
											required
											style={{ padding: '3px 0' }}
											id='fileInput'
											type='file'
											accept='image/*'
											name='image'
											onChange={handleFileInputChange}
											value={fileInputState}
											className='form-input'
										/>
									</Grid>
									<Grid item xs={12} sm={12}>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='passionate'
											label='Passionate About'
											name='passionate'
											value={passionate}
											onChange={(e) => setPassionate(e.target.value)}
										/>
									</Grid>

									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='Qualification'
											label='Qualification'
											name='Qualification'
											value={qualification}
											onChange={(e) => setQualification(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='linkedIn'
											label='LinkedIn'
											name='linkedIn'
											value={linkedIn}
											onChange={(e) => setlinkedin(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='skills'
											label='Skills'
											name='lastName'
											autoComplete='skills'
											value={skills}
											onChange={(e) => setSkills(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											fullWidth
											id='portfolio'
											label='Portfolio Link (if any)'
											name='portfolio'
											value={portfolio}
											onChange={(e) => setPortfolio(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											fullWidth
											id='experience'
											label='Experience'
											name='experience'
											value={experience}
											onChange={(e) => setExperience(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='location'
											label='Location'
											name='location'
											value={location}
											onChange={(e) => setLocation(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<Typography
											component='h1'
											variant='h5'
											style={{
												margin: '15px',
												textAlign: 'center'
											}}
										>
											Premium Offerings (If any)
										</Typography>
									</Grid>

									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											fullWidth
											id='service'
											label='Service Name'
											name='service'
											value={service}
											onChange={(e) => setService(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											type='numeric'
											variant='outlined'
											fullWidth
											id='price'
											label='Price'
											name='price'
											value={price}
											onChange={(e) => setPrice(e.target.value)}
										/>
									</Grid>
								</Grid>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									color='primary'
									className={classes.submit}
								>
									Register
								</Button>
							</form>
						</div>
						<Box m={2}>
							<Copyright />
						</Box>
					</Container>
				</div>
				<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
					<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
				</Popup>
			</div>
		);
	}
}
