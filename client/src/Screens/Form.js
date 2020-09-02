import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import GoogleLogin from 'react-google-login';
import Footer from '../Components/Footer2';

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

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
const sectors = [
	{
		value: 'individualIdeator',
		label: 'Individual Ideator'
	},
	{
		value: 'registeredStartup',
		label: 'Registered Startup'
	}
];

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(8, 0, 2)
	}
}));

export default function SignUp () {
	const [ open, setOpen ] = React.useState(false);
	const classes = useStyles();
	const [ sector, setSector ] = React.useState(null);
	const [ email, setEmail ] = React.useState('');
	const [ topic, setTopic ] = React.useState('');
	const [ briefIdea, setBriefIdea ] = React.useState('');
	const [ phone, setPhone ] = React.useState('');
	const [ f1email, setF1email ] = React.useState('');
	const [ f2email, setF2email ] = React.useState('');

	const handleClose = () => {
		setOpen(false);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		axios({
			headers: {
				'content-type': 'text/json'
			},
			method: 'PUT',
			url: 'https://serieux-saucisson-31787.herokuapp.com/api/ideasubmit',
			// url: "http://localhost:5000/api/ideasubmit",
			data: { sector, topic, briefIdea, phone, f1email, f2email, email }
		})
			.then((response) => {
				console.log(response);
				alert('Your information has been successfully submitted.');
				setSector('');
				setEmail('');
				setTopic('');
				setBriefIdea('');
				setPhone('');
				setF1email('');
				setF2email('');
			})
			.catch((response) => {
				const statuscode = '404';
				const index = response.toString().indexOf(statuscode);
				console.log(index);
				if (index > -1) {
					setOpen(true);
				}
				console.log(`Error-Response: ${response}`);
			});
	};

	const responseSuccessGoogle = (response) => {
		axios({
			method: 'POST',
			url: 'https://serieux-saucisson-31787.herokuapp.com/api/googlelogin',
			// url: "http://localhost:5000/api/googlelogin",
			data: { tokenId: response.tokenId }
		}).then((response) => {
			console.log('Google login success ', response);
			// printres(response);
			alert(`Welcome ${response.data.user.name}! You have been Successfully Signed In!`);
		});
	};

	const responseErrorGoogle = (response) => {
		console.log(response);
	};

	return (
		<div>
			<Container component='main' maxWidth='sm'>
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component='h2' variant='h4'>
						Submit your idea
					</Typography>
					<form className={classes.form} onSubmit={submitHandler}>
						<Grid container spacing={2}>
							<Grid spacing={2} item xs={12}>
								<TextField
									type='email'
									variant='outlined'
									required
									fullWidth
									id='email'
									label='Use your email'
									name='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id='outlined-select-sector'
									fullWidth
									select
									required
									label='Idea Stage'
									value={sector}
									helperText='Choose the stage of your idea'
									variant='outlined'
									onChange={(e) => setSector(e.target.value)}
								>
									{sectors.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12}>
								<div className='containerinput'>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='topic'
										label='Give your idea in one line'
										name='topic'
										value={topic}
										onChange={(e) => setTopic(e.target.value)}
									/>
								</div>
							</Grid>
							<Grid item xs={12}>
								<div className='containerinput'>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='standard-basic'
										label='Brief us about your idea'
										name='briefIdea'
										value={briefIdea}
										onChange={(e) => setBriefIdea(e.target.value)}
									/>
								</div>
							</Grid>
							<Grid item xs={12}>
								<div className='containerinput'>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='phone'
										label='Phone No.'
										name='phone'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
							</Grid>

							<Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox value='allowExtraEmails' color='primary' />}
									label='Hereby you agree that the data sharing between you and MarketGad us will be strictly confidential and private'
								/>
							</Grid>
							<Grid container justify='flex-begin'>
								<Grid item>
									<Link href='/privacy' variant='body2' target='_blank'>
										Click Here to view our privacy policy
									</Link>
								</Grid>
							</Grid>
							<Typography style={{ alignSelf: 'center' }} component='h1' variant='h5'>
								Refer Your Friends
							</Typography>

							<div className='center' style={{ margin: 'auto' }}>
								<Grid item xs={12}>
									<TextField
										required={true}
										id='email'
										type='email'
										label='Email Address 1'
										name='f1email'
										value={f1email}
										onChange={(e) => setF1email(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										id='email'
										type='email'
										label='Email Address 2'
										name='f2email'
										value={f2email}
										onChange={(e) => setF2email(e.target.value)}
									/>
								</Grid>
							</div>
						</Grid>
						<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
							Scale Up!
						</Button>
					</form>
				</div>
				<Box m={3}>
					<Copyright />
				</Box>
				<div>
					<Dialog
						open={open}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby='alert-dialog-slide-title'
						aria-describedby='alert-dialog-slide-description'
					>
						<div className='center' style={{ padding: '10px', fontSize: '20px' }}>
							<DialogTitle id='alert-dialog-slide-title'>
								Welcome! Please sign in before submitting the form
							</DialogTitle>
						</div>
						<div className='center' style={{ padding: '10px' }}>
							<DialogActions>
								{/* <Button onClick={handleClose} variant="contained" color="primary" href="/dashboard">
                                LinkedIn Login
                                            </Button> */}
								<Button onClick={handleClose} href='/'>
									<GoogleLogin
										clientId='798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com'
										onSuccess={responseSuccessGoogle}
										onFailure={responseErrorGoogle}
										cookiePolicy={'single_host_origin'}
										redirectUri={'/dashboard'}
									/>
								</Button>
							</DialogActions>
						</div>
					</Dialog>
				</div>
			</Container>
			<Footer />
		</div>
	);
}
