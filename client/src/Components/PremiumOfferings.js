import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Cookies from 'js-cookie';
import ThreeDotLoad from './ThreeDotLoad';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
		},
		paper: {
			marginTop: theme.spacing(0),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			margin: theme.spacing(1)
		}
	}
}));

export default function PremiumOfferings (props) {
	const classes = useStyles();
	const { skills, location, experience, qualification, passionate, portfolio, linkedIn, experienceyears } = props;
	const [ RegisterJobSuccess, setRegisterJobSuccess ] = React.useState(false);
	const [ load, setLoad ] = React.useState('');
	const [ service, setService ] = React.useState('');
	const [ price, setPrice ] = React.useState('');
	const [ deliverytime, setDeliverytime ] = React.useState('');
	const [ OfferingDetails, setOfferingDetail ] = React.useState('');
	const submithandler = (e) => {
		e.preventDefault();
		const token = Cookies.get('session-id');
		const config = {
			headers: {
				Authorization: `Bearer  ${token}`
			}
		};
		const data = {
			skills: skills,
			location: location,
			experience: experience,
			qualification: qualification,
			passionateAbout: passionate,
			portfolioLink: portfolio,
			linkedIn: linkedIn,
			experienceyears: experienceyears,
			serviceName: service,
			offeringPrice: price,
			offeringDetails: OfferingDetails,
			deliverytime: deliverytime
		};
		setLoad(true);
		axios.post(process.env.REACT_APP_BASEURL + '/api/jobprofiles', data, config).then(
			(response) => {
				if (response.status === 200) {
					setRegisterJobSuccess(true);
					setLoad(false);
					window.location.reload(false);
				} else {
					alert(response.err);
				}
			},
			(error) => {
				if (error.message === 'Request failed with status code 413') {
					alert('upload photo size should be less than 500kb');
				} else {
					alert('One user can register once');
					window.location.reload(false);
				}
			}
		);
	};
	if (RegisterJobSuccess) {
		return <Redirect to='/' />;
	} else if (load === true) {
		return (
			<div style={{ textAlign: 'center', padding: '10%' }}>
				<ThreeDotLoad />
			</div>
		);
	} else {
		return (
			<div className='row' style={{ padding: '20px' }}>
				<div className='col l6 s12 center'>
					<img
						width='80%'
						src={
							'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422660/Theme/Photo1_bhaduk.png'
						}
					/>
				</div>

				<div className='col l6 s12'>
					<div
						className='center'
						style={{
							paddingBottom: '4%',
							fontSize: '1.4em',
							fontWeight: '600',
							fontFamily: 'Bahnschrift',
							color: 'darkblue'
						}}
					>
						What's your premium offering?
					</div>
					<form className={classes.form} Validate onSubmit={submithandler}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='service'
									label='Service Offered'
									type='text'
									variant='outlined'
									value={service}
									onChange={(e) => setService(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									id='delivery'
									label='Delivery Time'
									type='text'
									variant='outlined'
									value={deliverytime}
									onChange={(e) => setDeliverytime(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='offering'
									label='Details of Offering'
									type='text'
									variant='outlined'
									value={OfferingDetails}
									onChange={(e) => setOfferingDetail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='price'
									label='Price'
									type='numeric'
									variant='outlined'
									value={price}
									onChange={(e) => setPrice(e.target.value)}
								/>
							</Grid>
						</Grid>
						<div className='center' style={{ padding: '10px' }}>
							<div>
								<label>
									<input required class='with-gap' name='group1' type='radio' />
									<span>
										I agree to all <a href='#'>Terms & Conditions </a>
									</span>
								</label>
							</div>
						</div>
						<div className='center'>
							<button
								type='submit'
								class='btn-small'
								style={{
									margin: '5%',
									backgroundColor: '#1e4a72',
									color: 'white',
									borderRadius: '15px',
									padding: '0 7%'
								}}
							>
								Finish
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
