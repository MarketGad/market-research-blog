import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

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
		letterSpacing: '0.05em'
	},
	chip: {
		padding: '10px',
		borderRadius: '5px',
		fontWeight: '900',
		fontSize: '1.2em',
		letterSpacing: '.07em'
	}
}));

export default function RegisterForProduct () {
	// const token = Cookies.get('session-id');

	const classes = useStyles();
	const LoginCheck = Cookies.get('session-id');
	const [ fileInputState, setFileInputState ] = React.useState('');
	const [ previewSource, setPreviewSource ] = React.useState('');
	const [ RegisterProductSuccess, setRegisterProductSuccess ] = React.useState(false);
	const [ name, setName ] = React.useState('');
	const [ weblink, setWeblink ] = React.useState('');
	const [ playlink, setPlaylink ] = React.useState('');
	const [ applelink, setApplelink ] = React.useState('');
	const [ briefdesc, setBriefdesc ] = React.useState('');
	const [ detaildesc, setDetaildesc ] = React.useState('');
	const [ email, setEmail ] = React.useState('');
	const [ contact, setContact ] = React.useState('');

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
		if (weblink || playlink) {
			const token = Cookies.get('session-id');
			const config = {
				headers: {
					Authorization: `Bearer  ${token}`
				}
			};
			axios
				.post(
					process.env.REACT_APP_BASEURL + '/api/productdetails',
					{
						logo: previewSource,
						name: name,
						websiteLink: weblink,
						playStoreLink: playlink,
						appStoreLink: applelink,
						briefDescription: briefdesc,
						detailedDescription: detaildesc,
						pointOfContact: contact,
						emailId: email
					},
					config
				)
				.then(
					(response) => {
						if (response.status === 200) {
							setRegisterProductSuccess(true);
						} else {
							alert(response.err);
						}
					},
					(error) => {
						if (error.message === 'Request failed with status code 413') {
							alert('upload photo size should be less than 500kb');
						} else if (error.response.data === 'Unauthorized') {
							alert('make sure that you are logged in');
						} else {
							alert('registeration failed');
						}
					}
				);
		} else {
			alert('Please mention your website or playstore link to continue');
		}
	};
	if (!LoginCheck) {
		return <Redirect to='/signup' />;
	} else if (RegisterProductSuccess) {
		return <Redirect to='/' />;
	} else {
		return (
			<div>
				<div>
					<Container component='main' maxWidth='sm'>
						<CssBaseline />
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								<span style={{ fontSize: '32px' }} class='material-icons'>
									add_business
								</span>
							</Avatar>
							<Typography component='h1' variant='h5' style={{ marginBottom: '20px' }}>
								<div className='product-content'>Add Your Product</div>
							</Typography>
							<form className={classes.form} onSubmit={submitHandler}>
								<Grid container spacing={2}>
									{previewSource && <img src={previewSource} alt='chosen' className='showpic' />}
									<Grid item xs={12} sm={6}>
										<Chip
											className={classes.chip}
											label='Upload Logo'
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
											id='name'
											label='Brand/App Name'
											name='name'
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											// required
											fullWidth
											id='weblink'
											label='Website'
											name='website'
											value={weblink}
											onChange={(e) => setWeblink(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											fullWidth
											id='applelink'
											label='App store link'
											name='appplelink'
											value={applelink}
											onChange={(e) => setApplelink(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											fullWidth
											id='playlink'
											label='Play store link'
											name='playlink'
											value={playlink}
											onChange={(e) => setPlaylink(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='briefdesc'
											label='Brief Description'
											name='briefdesc'
											value={briefdesc}
											onChange={(e) => setBriefdesc(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											multiline
											id='detaildesc'
											label='Detailed Description'
											name='detaildesc'
											value={detaildesc}
											onChange={(e) => setDetaildesc(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='contact'
											label='Point of Contact'
											name='contact'
											value={contact}
											onChange={(e) => setContact(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											type='email'
											variant='outlined'
											required
											fullWidth
											id='email'
											label='E-mail'
											name='email'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
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
									Add your Product
								</Button>
							</form>
						</div>
					</Container>
				</div>
				{/* <Footer /> */}
			</div>
		);
	}
}
