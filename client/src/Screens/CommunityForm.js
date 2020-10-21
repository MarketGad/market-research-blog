import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
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
		value: '#idea',
		label: 'Ideas'
	},
	{
		value: '#trend',
		label: 'Trends'
	}
];

export default function CommunityForm () {
	const classes = useStyles();
	const LoginCheck = Cookies.get('session-id');
	const [ RegistertrendSuccess, setRegistertrendSuccess ] = React.useState(false);
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const [ about, setAbout ] = React.useState('');
	const [ weblink, setWeblink ] = React.useState('');
	const [ title, settitle ] = React.useState('');
	const [ category, setCategory ] = React.useState(null);

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
				process.env.REACT_APP_BASEURL + '/api/disrupterclub/posts',
				{
					title: title,
					description: about,
					link: weblink,
					hashtag: category
				},
				config
			)
			.then(
				(response) => {
					if (response.status === 200) {
						setRegistertrendSuccess(true);
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
	if (RegistertrendSuccess) {
		return <Redirect to='/community' />;
	} else {
		return (
			<div>
				<div>
					<Container component='main' maxWidth='sm'>
						<CssBaseline />
						<div className={classes.paper}>
							<Typography component='h1' variant='h5' style={{ marginBottom: '20px' }}>
								<div className='product-content'>Let's share</div>
							</Typography>
							<Typography component='h4' variant='h6' style={{ marginBottom: '20px' }}>
								<div>It's your own community</div>
							</Typography>
							<form className={classes.form} onSubmit={submitHandler}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											required
											fullWidth
											multiline
											id='jobtitle'
											label='What would you like to talk about?'
											placeholder='What would you like to talk about?'
											name='title'
											value={title}
											onChange={(e) => settitle(e.target.value)}
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
									<Grid item xs={12} sm={12}>
										<TextField
											variant='outlined'
											required
											fullWidth
											multiline
											id='about'
											label='What&#39;s interesting about this?'
											placeholder='What&#39;s interesting about this?'
											name='about'
											value={about}
											onChange={(e) => setAbout(e.target.value)}
										/>
									</Grid>

									<Grid item xs={12} sm={12} className='center'>
										<TextField
											variant='outlined'
											fullWidth
											id='weblink'
											label='Relevant link'
											name='weblink'
											value={weblink}
											onChange={(e) => setWeblink(e.target.value)}
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
									Share
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
