import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Popup from './Popup';
import FormExperience from './FormExperience';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(0)
		},
		paper: {
			marginTop: theme.spacing(0),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(0)
		},
		submit: {
			margin: theme.spacing(2, 0, 2)
		}
	}
}));

export default function FormPassion (props) {
	const classes = useStyles();
	const { openJobprofile, setOpenjobprofile } = props;
	const [ openExperience, setOpenExperience ] = useState('');
	const [ passionate, setPassionate ] = useState('');
	const [ qualification, setQualification ] = useState('');
	const [ linkedIn, setlinkedin ] = useState('');
	const [ skills, setSkills ] = useState('');
	const [ portfolio, setPortfolio ] = useState('');
	const [ experience, setExperience ] = useState('');
	const [ location, setLocation ] = useState('');
	const [ service, setService ] = useState('');
	const [ price, setPrice ] = useState('');

	const submithandler = (e) => {
		e.preventDefault();
		// setOpenjobprofile(false);
		setOpenExperience(true);
	};
	return (
		<div>
			<div className='row'>
				<div className='col l5 s12'>
					<p style={{ textAlign: 'center' }}>
						<img
							width='80%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422996/Theme/2_kkipf5.png'
							}
						/>
					</p>
				</div>

				<div className='col l7 s12' style={{ padding: '0 5%' }}>
					<div
						className='center'
						style={{
							fontSize: '1.3em',
							fontFamily: 'Bahnschrift',
							color: 'darkblue',
							paddingBottom: '2%',
							textAlign: 'center'
						}}
					>
						It will just take two minutes to launch your the future of your career with MarketGad
					</div>
					<div
						className='center'
						style={{
							fontSize: '1.2em',
							fontFamily: 'Bahnschrift',
							color: '#87879f',
							marginBottom: '2%',
							textAlign: 'center'
						}}
					>
						Professional Details
					</div>
					<form className={classes.root} Validate onSubmit={submithandler}>
						<div>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
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
								<Grid item xs={12} sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='location'
										label='Current City'
										name='location'
										value={location}
										onChange={(e) => setLocation(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
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
								<Grid item xs={12} sm={6}>
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
							</Grid>
						</div>
						<div className='center'>
							<button
								type='submit'
								class='btn-small'
								style={{
									marginTop: '5%',
									backgroundColor: '#1e4a72',
									color: 'white',
									borderRadius: '15px',
									padding: '0 7%'
								}}
							>
								Next
							</button>
						</div>
					</form>
				</div>
				<Popup openPopup={openExperience} setOpenPopup={setOpenExperience}>
					<FormExperience
						qualification={qualification}
						portfolio={portfolio}
						passionate={passionate}
						location={location}
						openExperience={openExperience}
						setOpenExperience={setOpenExperience}
					/>
				</Popup>
			</div>
		</div>
	);
}
