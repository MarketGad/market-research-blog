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
import MenuItem from '@material-ui/core/MenuItem';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import SignIn from '../Screens/signin';
import Popup from '../Components/Popup';

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
const categories = [
	{
		value: 'full-time',
		label: 'Full time'
	},
	{
		value: 'internship',
		label: 'Internship'
	}
];
const industries = [
	{
		value: 'Software',
		label: 'Software'
	},
	{
		value: 'Operations',
		label: 'Operations'
	},
	{
		value: 'Marketing',
		label: 'Marketing'
	},
	{
		value: 'Finance',
		label: 'Finance'
	},
	{
		value: 'Engineering',
		label: 'Engineering'
	},
	{
		value: 'Product',
		label: 'Product'
	},
	{
		value: 'Other',
		label: 'Other'
	}
];

export default function JobForm () {
	const classes = useStyles();
	const LoginCheck = Cookies.get('session-id');
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const [ fileInputState, setFileInputState ] = React.useState('');
	const [ previewSource, setPreviewSource ] = React.useState('');
	const [ RegisterJobSuccess, setRegisterJobSuccess ] = React.useState(false);
	const [ name, setName ] = React.useState('');
	const [ weblink, setWeblink ] = React.useState('');
	const [ jobtitle, setJobtitle ] = React.useState('');
	const [ category, setCategory ] = React.useState(null);
	const [ industry, setIndustry ] = React.useState(null);

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
		axios
			.post(
				process.env.REACT_APP_BASEURL + '/api/jobs',
				{
					logo: previewSource,
					companyName: name,
					jobLink: weblink,
					title: jobtitle,
					type: category,
					industry: industry
				},
				config
			)
			.then(
				(response) => {
					if (response.status === 200) {
						setRegisterJobSuccess(true);
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
	};
	if (RegisterJobSuccess) {
		return <Redirect to='/jobs' />;
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
								<div className='product-content'>Add a Job/Internship</div>
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
									<Grid item xs={12}>
										<TextField
											id='outlined-select-sector'
											fullWidth
											select
											required
											label='Category'
											value={category}
											variant='outlined'
											onChange={(e) => setCategory(e.target.value)}
										>
											{categories.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id='outlined-select-sector'
											fullWidth
											select
											required
											label='Options'
											value={industry}
											variant='outlined'
											onChange={(e) => setIndustry(e.target.value)}
										>
											{industries.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} sm={12}>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='name'
											label='Company Name'
											name='name'
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</Grid>

									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='weblink'
											label='Job Link'
											name='weblink'
											value={weblink}
											onChange={(e) => setWeblink(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='jobtitle'
											label='Job Title/Position'
											name='jobtitle'
											value={jobtitle}
											onChange={(e) => setJobtitle(e.target.value)}
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
									Add Job/internship
								</Button>
							</form>
						</div>
					</Container>
				</div>
				<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
					<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
				</Popup>
			</div>
		);
	}
}
