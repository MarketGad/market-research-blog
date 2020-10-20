import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '20ch'
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

export default function PremiumOfferings () {
	const classes = useStyles();

	return (
		<div>
			<div className='row'>
				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white',
						height:
							'300px' /*, borderRight:'2px solid #87879f' ,borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px' */
					}}
				>
					<p style={{ textAlign: 'center' }}>
						<img
							width='80%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422660/Theme/Photo1_bhaduk.png'
							}
						/>
					</p>
				</div>

				<div
					className='col l6 s12'
					style={{
						backgroundColor: 'white',
						height: '300px' /*,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/
					}}
				>
					<div
						className='center'
						style={{
							fontSize: '1.4em',
							fontFamily: 'Bahnschrift',
							color: 'darkblue',
							padding: '3% 15% 3% 0%'
						}}
					>
						What's your premium offering?
					</div>
					<form className={classes.root} noValidate autoComplete='off'>
						<div>
							<TextField id='service' label='Service Offered' type='text' variant='outlined' />
							<TextField id='delivery' label='Delivery Time' type='text' variant='outlined' />
							<TextField id='offering' label='Details of Offering' type='text' variant='outlined' />
							<TextField id='price' label='Price' type='numeric' variant='outlined' />
						</div>
					</form>
					<div className='center' style={{ paddingRight: '13%' }}>
						<p>
							<label>
								<input
									class='with-gap'
									name='group1'
									type='radio'
									style={{ backgroundColor: 'white' }}
								/>
								<span>
									I agree to all <a href='#'>Terms & Conditions </a>
								</span>
							</label>
						</p>
					</div>
					<div className='center' style={{ paddingRight: '10%' }}>
						<div
							class='btn-small'
							style={{
								backgroundColor: '#1e4a72',
								color: 'white',
								border: 'none',
								borderRadius: '15px',
								paddingLeft: '7%',
								paddingRight: '7%'
							}}
						>
							Finish
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
