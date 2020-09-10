import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(1),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		color: '#080808d9',
		backgroundColor: 'transparent'
	},
	form: {
		width: '95%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(1, 0, 1, 0)
	},
	userdisp: {
		marginTop: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	userimg: {
		borderRadius: '10px',
		height: '10rem',
		width: '50%',
		margin: '0 25%'
	}
}));

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const PeopleList = () => {
	const classes = useStyles();
	const [ Useropen, setUser ] = React.useState(false);

	const handleClickUser = () => {
		setUser(true);
	};

	const handleCloseUser = () => {
		setUser(false);
	};

	const people = [
		{
			userName: 'Saidatta',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem. 1+ years of exeperience in so and so',
			userGrade: '5'
		},
		{
			userName: 'ajitesh',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem',
			userGrade: '6'
		},
		{
			userName: 'Sidhartha',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
			userGrade: '7'
		},
		{
			userName: 'Rashmi',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
			userGrade: '9'
		},
		{
			userName: 'Mrutyunjay',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
			userGrade: '8'
		}
	];

	const showPeople = people.length ? (
		people.map((user, index) => {
			const cookie = Cookies.get('session-id');
			console.log(cookie);
			return (
				<div>
					<ul className='collection'>
						<li className='collection-item avatar'>
							<img src={user.userImage} alt='' className='circle' />
							<a className='title' href={'/' + index}>
								<b>{user.userName}</b>
							</a>
							<p>
								<b>Skills: </b>
								{user.userSkills}
								<br />
								<b>Experience: </b>
								{user.userExperience}
								<br />
								<div
									className='secondary-content'
									style={{
										marginTop: '-2%',
										padding: '0 5px',
										borderRadius: '10px'
									}}
								>
									<span
										style={{
											position: 'relative',
											padding: '2px',
											fontSize: '12px',
											color: '#ff9529'
										}}
										className='material-icons'
									>
										fiber_manual_record
									</span>
									<span style={{ fontSize: '16px', padding: '1px', fontWeight: '600' }}>
										{user.userGrade}
									</span>
								</div>
							</p>
							<a className='waves-effect waves-light btn hire-btn1' style={{ marginTop: '2%' }}>
								Hire
							</a>
							<a
								className='waves-effect waves-light btn hire-btn1'
								style={{ float: 'right', marginTop: '2%' }}
								href={'/' + index}
							>
								Connect
							</a>
						</li>
						<Dialog
							open={Useropen}
							TransitionComponent={Transition}
							keepMounted
							onClose={handleCloseUser}
							aria-labelledby='alert-dialog-slide-title'
							aria-describedby='alert-dialog-slide-description'
						/>
					</ul>
				</div>
			);
		})
	) : (
		<div className='center'> No People to show: ( </div>
	);
	return <div>{showPeople}</div>;
};

export default PeopleList;
