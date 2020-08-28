import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../Components/Footer2';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(3),
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

export default function SignIn () {
	const classes = useStyles();

	return (
		<div>
			<div>
				<Container component='main' maxWidth='xs'>
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<PersonIcon />
						</Avatar>
						<Typography component='h1' variant='h5' style={{ marginBottom: '30px' }}>
							Sign In
						</Typography>
						<form className={classes.form}>
							<Grid container spacing={2}>
								<Grid spacing={2} item xs={12}>
									<TextField
										type='email'
										variant='outlined'
										required
										fullWidth
										id='email'
										label='Email Address'
										name='email'
									/>
								</Grid>
								<Grid spacing={2} item xs={12}>
									<TextField
										variant='outlined'
										margin='normal'
										required
										fullWidth
										name='password'
										label='Password'
										type='password'
										id='password'
										autoComplete='current-password'
									/>
								</Grid>
							</Grid>
							<FormControlLabel
								control={<Checkbox value='remember' color='primary' />}
								label='Remember me'
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href='#' variant='body2'>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href='/signup' variant='body2'>
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</form>
					</div>
				</Container>
			</div>
			<Footer />
		</div>
	);
}
