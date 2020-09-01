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

export default function RegisterForProduct () {
	const classes = useStyles();

	return (
		<div>
			<div>
            <Container component='main' maxWidth='xs'>
									<CssBaseline />
									<div className={classes.paper}>
										<Avatar className={classes.avatar} >
											<PersonAddIcon />
										</Avatar>
										<Typography component='h1' variant='h5' style={{ marginBottom: '20px' }}>
											Add Your Product
										</Typography>
										<form className={classes.form}>
											<Grid container spacing={2}>
												<Grid item xs={12} sm={12}>
													<TextField
														variant='outlined'
														required
														fullWidth
														id='name'
														label='Name of your product'
														name='name'
														autoComplete='Product'
													/>
												</Grid>
												<Grid item xs={12} sm={12} className='center'>
													<TextField
														variant='outlined'
														required
														fullWidth
														id='image'
														label='Image Link'
														name='image'
														autoComplete='image'
													/>
												</Grid>
												<Grid item xs={12} sm={12} className='center'>
													<TextField
														variant='outlined'
														required
														fullWidth
														id='desc'
														label='Tell something about your product'
														name='desc'
														autoComplete='description'
													/>
												</Grid>
												<Grid item xs={12} sm={12} className='center'>
													<TextField
														variant='outlined'
														required
														fullWidth
														id='download'
														label='Link of your Product'
														name='download'
														autoComplete='Link'
													/>
												</Grid>
											</Grid>
											<Button
												type='submit'
												fullWidth
												variant='contained'
												color='primary'
                                                className={classes.submit}
                                                style= {{'marginTop':'20px'}}
											>
												Add your Product
											</Button>
										</form>
									</div>
								</Container>
			</div>
			<Footer />
		</div>
	);
}
