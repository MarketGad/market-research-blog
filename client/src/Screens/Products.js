import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import StarIcon from '@material-ui/icons/Star';
import Register from '../Components/Register';
import ListProduct from '../Components/ListProduct';

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
		flexDirection: 'column'
	},
	userimg: {
		borderRadius: '10px',
		height: '10rem',
		width: '10rem',
		marginLeft: '30%'
	}
}));

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const Products = () => {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const [ Useropen, setUser ] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickUser = () => {
		setUser(true);
	};

	const handleCloseUser = () => {
		setUser(false);
	};

	const showComment = () => {
		var x = document.getElementById('comment-form');
		if (x.style.display === 'none') {
			x.style.display = 'block';
		} else {
			x.style.display = 'none';
		}
	};

	const products = [
		{
			productName: 'Anonymous Product',
			productImage: 'https://lorempixel.com/100/190/nature/6',
			productDesc: 'This product is great',
			productRating: '3'
		}
	];

	const people = [
		{
			userName: 'Anonymous User',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem. 1+ years of exeperience in so and so',
			userGrade: '3'
		},
		{
			userName: 'Anonymous User',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem',
			userGrade: '3'
		},
		{
			userName: 'Anonymous User',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
			userGrade: '3'
		},
		{
			userName: 'Anonymous User',
			userImage: 'https://lorempixel.com/100/190/nature/6',
			userSkills: 'Lorem, Lorem, Lorem, Lorem',
			userEmail: 'abc@gmail.com',
			userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
			userLocation: 'Mumbai, Maharashtra, India',
			userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
			userGrade: '3'
		}
	];

	const showProducts = products.length ? (
		products.map((product) => {
			return (
				<div>
					<ul className='collection'>
						<li className='collection-item avatar'>
							<img src={product.productImage} alt='' className='circle' />
							<a className='title' onClick={handleClickUser}>
								<b>{product.productName}</b>
							</a>
							<p>
								{product.productDesc}
								<br />
								<b>Rate:</b>
								{product.productRating}/5 <br />
							</p>
							<a href='#!' className='secondary-content'>
								<i className='material-icons download-icon'>file_download</i>
							</a>
							<button className='waves-effect waves-light btn-small comment-btn1'>
								<i className='material-icons' onClick={showComment}>
									comment
								</i>
							</button>
							<form id='comment-form' style={{ display: 'none' }}>
								<input type='text' style={{ width: '60%' }} placeholder='Enter Comment' />
								<button
									className='waves-effect waves-light btn-small pro-btn1'
									style={{
										float: 'right'
									}}
									type='submit'
								>
									Add Comment
								</button>
							</form>
						</li>
					</ul>
				</div>
			);
		})
	) : (
		<div className='center'> No Products to show: ( </div>
	);

	const showPeople = people.length ? (
		people.map((user) => {
			return (
				<div>
					<ul className='collection'>
						<li className='collection-item avatar'>
							<img src={user.userImage} alt='' className='circle' />
							<a className='title' onClick={handleClickUser}>
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
										backgroundColor: '#ff9529',
										padding: '0 5px',
										borderRadius: '10px',
										color: '#fff'
									}}
								>
									<span style={{ fontSize: '16px' }}>{user.userGrade}</span>
									<span
										style={{ position: 'relative', top: '2px', padding: '2px', fontSize: '16px' }}
										className='material-icons'
									>
										grade
									</span>
								</div>
							</p>
							<a className='waves-effect waves-light btn hire-btn1' style={{ marginTop: '2%' }}>
								Hire
							</a>
							<a
								className='waves-effect waves-light btn hire-btn1'
								style={{ float: 'right', marginTop: '2%' }}
								onClick={handleClickUser}
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
						>
							<div>
								<Container
									component='main'
									maxWidth='xs'
									style={{ backgroundColor: 'white', color: 'black' }}
								>
									<CssBaseline />
									<div className={classes.userdisp} style={{ paddingTop: '2%', paddingBottom: '2%' }}>
										<img className={classes.userimg} src={user.userImage} alt={user.userName} />
										<div
											className='article-subhead'
											style={{ color: '#0153a5', fontFamily: 'GlacialIndifferenceBold' }}
										>
											{user.userName}
										</div>
										<div className='article-content'>
											<b>Expertise Skills :</b>
											<br /> {user.userSkills}
										</div>
										<br />
										<div className='article-content'>
											<b>Description :</b>
											<br /> {user.userDesc}
										</div>
										<br />
										<div className='article-content'>
											<b>Location :</b>
											<br /> {user.userLocation}
										</div>
										<br />
										<div className='article-content'>
											<b>Experiences :</b>
											<br /> {user.userExperience}
										</div>
										<br />
										<div
											className='secondary-content'
											style={{
												marginTop: '-2%',
												backgroundColor: '#ff9529',
												padding: '0 5px',
												borderRadius: '10px',
												color: '#fff',
												width:'10%'
											}}
										>
											<span style={{ fontSize: '16px' }}>{user.userGrade}</span>
											<span
												style={{ position: 'relative', top: '2px', padding: '2px', fontSize: '16px' }}
												className='material-icons'
											>
												grade
											</span>
										</div>
										<Button
											onClick={handleCloseUser}
											fullWidth
											variant='contained'
											color='primary'
											className={classes.submit}
											style={{ fontFamily: 'GlacialIndifferenceBold' }}
										>
											Close
										</Button>
									</div>
								</Container>
							</div>
						</Dialog>
					</ul>
				</div>
			);
		})
	) : (
		<div className='center'> No People to show: ( </div>
	);
	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col s12 l8'>
						<h4 className='center' style={{ fontFamily: 'GlacialIndifferenceBold' }}>
							Hot Products
						</h4>
						<ListProduct/>
						{showProducts}
					</div>
					<div className='col s12 l4'>
						<h4 className='center' style={{ fontFamily: 'GlacialIndifferenceBold' }}>
							List Of People
						</h4>
						{/*<a
							className='waves-effect waves-light btn-small hire-btn1'
							style={{ backgroundColor: '#0153a5', color: 'white' }}
						>
							Skill Wise Filter
						</a>*/}
						<Register/>
						{showPeople}
					</div>
					</div>
			</div>
		</div>
	);
};

export default Products;
