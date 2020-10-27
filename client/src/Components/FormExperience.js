import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FreelanceAgree from './FreelanceAgree';
import Popup from './Popup';

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
		avatar: {
			color: '#080808d9',
			backgroundColor: 'transparent',
			fontSize: '48vw'
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

export default function FormExperience (props) {
	const classes = useStyles();
	const { qualification, portfolio, passionate, location, openExperience, setOpenExperience } = props;
	const [ openFreelance, setOpenFreelance ] = React.useState('');
	const [ linkedIn, setlinkedin ] = React.useState('');
	const [ skills, setSkills ] = React.useState('');
	const [ experienceyears, setExperienceyears ] = React.useState('');
	const [ experience, setExperience ] = React.useState('');
	const submithandler = (e) => {
		e.preventDefault();
		setOpenFreelance(true);
	};
	return (
		<div className='exp-cont'>
			<div className='row'>
				<div className='col l6 s12'>
					<p style={{ textAlign: 'center' }}>
						<img
							width='80%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422918/Theme/Photo_ok6x8w.png'
							}
						/>
					</p>
				</div>

				<div className='col l6 s12' style={{ paddingRight: '5%' }}>
					<div className='center' className='exp-p1'>
						It will just take two minutes to launch your the future of your career with MarketGad
					</div>
					<div className='center' className='exp-p2'>
						Professional Details
					</div>
					<form className={classes.root} Validate onSubmit={submithandler}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='linkedIn'
									label='LinkedIn'
									name='linkedIn'
									value={linkedIn}
									onChange={(e) => setlinkedin(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='skills'
									label='Skills'
									name='lastName'
									autoComplete='skills'
									helperText='separate multiple skills by &#39; , &#39;'
									value={skills}
									onChange={(e) => setSkills(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									fullWidth
									id='experience'
									label='Experience'
									name='experience'
									value={experience}
									onChange={(e) => setExperience(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									id='experienceyears'
									label='Experience years'
									variant='outlined'
									value={experienceyears}
									onChange={(e) => setExperienceyears(e.target.value)}
								/>
							</Grid>
						</Grid>
						<div className='center'>
							<button
								type='submit'
								class='btn-small'
								style={{
									marginTop: '4%',
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
				<Popup openPopup={openFreelance} setOpenPopup={setOpenFreelance}>
					<FreelanceAgree
						{...props}
						skills={skills}
						linkedIn={linkedIn}
						experience={experience}
						experienceyears={experienceyears}
						openExperience={openFreelance}
						setOpenExperience={setOpenFreelance}
					/>
				</Popup>
			</div>
		</div>
	);
}
