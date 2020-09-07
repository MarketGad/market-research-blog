import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PersonAddIcon from '@material-ui/icons/Person';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
		margin: theme.spacing(2, 0, 2)
	}
}));

export default function RegisterForJobs () {
	const classes = useStyles();
	const [ fileInputState, setFileInputState ] = React.useState('');
	const [ selectedFile, setSelectedFile ] = React.useState('');
	const [ previewSource, setPreviewSource ] = React.useState('');

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
			console.log(reader.result);
		};
	};

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
							Register Yourself For Jobs
						</Typography>
						<form className={classes.form}>
							<Grid container spacing={2}>
								{previewSource && (
									<img
										src={previewSource}
										alt='chosen'
										style={{ width: '40%', textAlign: 'center', margin: '0 30%' }}
									/>
								)}
								<Grid item xs={12} sm={6}>
									<Button
										variant='contained'
										component='label'
										size='small'
										style={{ display: 'inlineBlock' }}
										required
										color='primary'
										startIcon={<CloudUploadIcon />}
									>
										Profile Picture
									</Button>
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
										id='passionate'
										label='Passionate About'
										name='passionate'
									/>
								</Grid>

								<Grid item xs={12} sm={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='name'
										label='Name'
										name='name'
										autoComplete='name'
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
										id='Qualification'
										label='Qualification'
										name='Qualification'
										autoComplete='Qualification'
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
										autoComplete='linkedIn'
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
										fullWidth
										id='portfolio'
										label='Portfolio Link (if any)'
										name='desc'
										autoComplete='portfolio'
									/>
								</Grid>
								<Grid item xs={12} sm={12} className='center'>
									<TextField
										variant='outlined'
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
		</div>
	);
}
