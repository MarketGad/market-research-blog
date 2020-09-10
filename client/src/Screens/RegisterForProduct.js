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
import PersonAddIcon from '@material-ui/icons/Person';
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
		fontFamily: 'GlacialIndifferenceBold',
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
	const classes = useStyles();
	const [ fileInputState, setFileInputState ] = React.useState('');
	const [ selectedFile, setSelectedFile ] = React.useState('');
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
		setSelectedFile(file);
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
		const config = {
			headers: {
				Authorization: `Bearer  ${token}`
			}
		};
		axios
			.post(
				'http://localhost:5000/api/productdetails',
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
					console.log(error);
				}
			);
	};

	if (RegisterProductSuccess) {
		return <Redirect to='/products' />;
	} else {
		return (
			<div>
				<div>
					<Container component='main' style={{ width: '550px' }}>
						<CssBaseline />
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								<PersonAddIcon />
							</Avatar>
							<Typography component='h1' variant='h5' style={{ marginBottom: '20px' }}>
								Add Your Product
							</Typography>
							<form className={classes.form} onSubmit={submitHandler}>
								<Grid container spacing={2}>
									{previewSource && (
										<img
											src={previewSource}
											alt='chosen'
											style={{ width: '40%', textAlign: 'center', margin: '0 30%' }}
										/>
									)}
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
											style={{ padding: '3px 0' }}
											id='fileInput'
											type='file'
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
