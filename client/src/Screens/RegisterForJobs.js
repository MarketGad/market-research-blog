import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../Components/Footer2';
import PersonAddIcon from '@material-ui/icons/Person';

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
		margin: theme.spacing(1, 0, 2)
	}
}));

export default function RegisterForJobs () {
	const classes = useStyles();

	return (
		<div>
			<div>
				<Container component='main' maxWidth='xs'>
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<PersonAddIcon />
						</Avatar>
						<Typography component='h1' variant='h5' style={{ marginBottom: '20px' }}>
							Register Yourself
						</Typography>
						<form className={classes.form}>
							<Grid container spacing={2}>
								<Grid spacing={2} item sm={6}>
									<TextField
										autoComplete='fname'
										name='firstName'
										variant='outlined'
										required
										fullWidth
										id='firstName'
										label='First Name'
										autoFocus
									/>
								</Grid>
								<Grid spacing={2} item sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='lastName'
										label='Last Name'
										name='lastName'
										autoComplete='lname'
									/>
								</Grid>
								<Grid item xs={12} sm={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='email'
										label='Email'
										name='email'
										autoComplete='email'
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
									/>
								</Grid>
								<Grid item xs={12} sm={12} className='center'>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='desc'
										label='Description'
										name='desc'
										autoComplete='description'
									/>
								</Grid>
								<Grid item xs={12} sm={12} className='center'>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='experience'
										label='Experience'
										name='experience'
										autoComplete='experience'
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
										autoComplete='location'
									/>
								</Grid>
								<Grid item xs={12} sm={12} className='center'>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='profilepic'
										label='Link Of Profile Picture'
										name='profilepic'
										autoComplete='profilepic'
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
				</Container>
			</div>
			<Footer />
		</div>
	);
}
