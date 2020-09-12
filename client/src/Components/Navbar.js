import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import logo from './Favicon.jpg';
import Slide from '@material-ui/core/Slide';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const Navbar = () => {
	const [ open, setOpen ] = React.useState(false);
	const [ redirect, setRedirect ] = React.useState(false);
	// const [name, setName] = React.useState("");
	// const [picture, setPicture] = React.useState("");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const responseSuccessGoogle = (response) => {
		console.log(response);
		// setPicture(response.profileObj.imageUrl);
		axios({
			method: 'POST',
			url: 'https://serieux-saucisson-31787.herokuapp.com/api/googlelogin',
			data: { tokenId: response.tokenId }
		}).then((response) => {
			alert(`Welcome ${response.data.user.name}! You have been Successfully Signed In!`);
			console.log('Google login success ', response);
			setRedirect(true);
			window.location.reload(false);
		});
	};

	const responseErrorGoogle = (response) => {
		console.log(response);
	};
	/*----------------------------conditional rendering of user name-----------------------------------*/
	const removecookie = () => {
		Cookies.remove('session-id');
	};
	const show = () => {
		const cookie = Cookies.get('session-id');
		if (!cookie) {
			return (
				<li>
					<a href='/signin'>Login</a>
				</li>
			);
		} else {
			return (
				<React.Fragment>
					<li>
						<a onClick={removecookie} href='/'>
							Logout
						</a>
					</li>
				</React.Fragment>
			);
		}
	};

	/*---------------------------------------------------------------------------------------------------*/

	if (redirect) {
		return <Redirect to='/dashboard' />;
	} else {
		return (
			<div>
				{/* <a href="#a" className="login-mob right sidenav-trigger" onClick={handleClickOpen}><i className="material-icons">person_add_alt_1</i></a> */}
				<div className='navbar-fixed'>
					<nav className='nav-center' role='navigation'>
						<div className='nav-wrapper'>
							<a href='/' data-target='mobile-demo' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</a>
							<a href='/' className='brand-logo logo sidenav-trigger'>
								<img
									height='55px'
									width='60px'
									style={{ position: 'relative' }}
									src={logo}
									alt='logo-mob'
								/>
							</a>
							<ul id='dropdown1' className='dropdown-content' style={{ backgroundColor: 'black' }}>
								<li>
									<a
										href='/industry'
										style={{ color: 'white', fontSize: '1.25em', paddingLeft: '25px' }}
									>
										Industry
									</a>
								</li>
								<li>
									<a
										href='/startup'
										style={{ color: 'white', fontSize: '1.25em', paddingLeft: '25px' }}
									>
										Start-ups
									</a>
								</li>
								<li>
									<a
										href='/venturehack'
										style={{ color: 'white', fontSize: '1.25em', paddingLeft: '25px' }}
									>
										Venture Hacks
									</a>
								</li>
							</ul>
							<div className='navmenu'>
								<ul
									id='nav-mobilecomp-menu'
									style={{ backgroundColor: 'black' }}
									className='hide-on-med-and-down'
								>
									<li>
										<a className='logo' href='/'>
											<img style={{ position: 'relative' }} src={logo} alt='logo' />
										</a>
									</li>
									<li>
										<a href='/funding'>Funding</a>
									</li>
									<li>
										<a className='dropdown-trigger' data-target='dropdown1'>
											Market Research
										</a>
									</li>
									<li>
										<a href='/about'>About Us</a>
									</li>
									{/* <li>
										<a onClick={handleClickOpen}>Dashboard</a>
									</li> */}
									{show()}
								</ul>
							</div>
						</div>
					</nav>

					{/* <ul>
                                <a href="#a" className="search" id="search-icon"><i className="material-icons">search</i></a>
                            </ul> */}
					<div>
						<form>
							<div className='input-field' style={{ display: 'none' }} id='search-div'>
								<input id='search-txt' type='search' />
								<label className='label-icon' htmlFor='search-txt'>
									<i className='material-icons'>search</i>
								</label>
								<i className='material-icons' id='close-icon'>
									close
								</i>
							</div>
						</form>
					</div>
				</div>
				<ul id='dropdown2' className='dropdown-content' style={{ backgroundColor: 'black' }}>
					<li>
						<a href='/industry' style={{ color: 'white' }}>
							Industry
						</a>
					</li>
					<li>
						<a href='/startup' style={{ color: 'white' }}>
							Start-ups
						</a>
					</li>
					<li>
						<a href='/venturehack' style={{ color: 'white' }}>
							Venture Hacks
						</a>
					</li>
				</ul>
				<ul className='sidenav' id='mobile-demo'>
					<nav>
						<div className='nav-wrapper'>
							<form>
								<div className='input-field'>
									<input id='search' type='search' placeholder='Search here...' />
									<label className='label-icon' htmlFor='search'>
										<i className='material-icons'>search</i>
									</label>
									<i className='material-icons'>close</i>
								</div>
							</form>
						</div>
					</nav>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a className='dropdown-trigger1' data-target='dropdown2'>
							Market Research<i className='material-icons right'>arrow_drop_side</i>
						</a>
					</li>
					<li>
						<a href='/funding'>Funding</a>
					</li>
					{/* {show()} */}
					{/* <li>
						<a onClick={handleClickOpen}>Dashboard</a>
					</li> */}
					<li>
						<a href='/about'>About Us</a>
					</li>
				</ul>
				<div>
					<Dialog
						open={open}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby='alert-dialog-slide-title'
						aria-describedby='alert-dialog-slide-description'
					>
						<div className='center' style={{ padding: '10px', fontSize: '20px' }}>
							<DialogTitle id='alert-dialog-slide-title'>
								Login to Get 10 Days of Free Subscription and use the exclusive Dashboard Feature
							</DialogTitle>
						</div>
						<div className='center' style={{ padding: '10px' }}>
							<DialogActions>
								<Button onClick={handleClose} href='/dashboard'>
									<GoogleLogin
										clientId='798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com'
										onSuccess={responseSuccessGoogle}
										onFailure={responseErrorGoogle}
										cookiePolicy={'single_host_origin'}
										redirectUri={'https://markeetgad.com/dashboard'}
									/>
								</Button>
							</DialogActions>
						</div>
					</Dialog>
				</div>
			</div>
		);
	}
};
export default Navbar;
