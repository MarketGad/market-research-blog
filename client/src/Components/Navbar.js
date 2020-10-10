import React, { useEffect } from 'react';
import AccountIcon from '@material-ui/icons/AccountCircle';
import logo from './Favicon.jpg';
// import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import ReputationPoint from './ReputaionPoints';

const Navbar = () => {
	const [ redirect, setRedirect ] = React.useState(false);
	const [ reputation, setReputation ] = React.useState('');
	const [ user, setUser ] = React.useState('');

	/*----------------------------conditional rendering of user name-----------------------------------*/
	const removecookie = () => {
		Cookies.remove('session-id');
		setReputation('');
	};
	const loadUser = async () => {
		const cookie = Cookies.get('session-id');
		const config = {
			headers: {
				Authorization: `Bearer ${cookie}`
			}
		};
		try {
			const res = await fetch(process.env.REACT_APP_BASEURL + '/api/user/profile', config);
			const response = await res.json();
			setReputation(response.user.reputation);
			setUser(response.user);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		loadUser();
	}, []);
	const show = () => {
		const cookie = Cookies.get('session-id');
		if (!cookie) {
			return (
				<li>
					<Link to='/signin' style={{ color: 'white', fontSize: '1em' }}>
						Login
					</Link>
				</li>
			);
		} else {
			return (
				<div>
					<li>
						<Link to='/' style={{ color: 'white', fontSize: '1em' }} onClick={removecookie}>
							Logout
						</Link>
					</li>
					<li>
						<Link
							style={{ color: 'white', fontSize: '1em' }}
							to={{
								pathname: 'profile',
								state: { user: user }
							}}
						>
							My Profile
						</Link>
					</li>
				</div>
			);
		}
	};
	const showmobile = () => {
		const cookie = Cookies.get('session-id');
		if (!cookie) {
			return (
				<li>
					<Link to='/signin'>Login</Link>
				</li>
			);
		} else {
			return (
				<div>
					<li>
						<Link
							to={{
								pathname: 'profile',
								state: { user: user }
							}}
						>
							My Profile
						</Link>
					</li>
					<li>
						<Link to='/' onClick={removecookie}>
							Logout
						</Link>
					</li>
				</div>
			);
		}
	};

	/*---------------------------------------------------------------------------------------------------*/

	if (redirect) {
		return <Redirect to='/dashboard' />;
	} else {
		return (
			<div>
				<div className='navbar-fixed'>
					<nav className='nav-center' role='navigation'>
						<div className='nav-wrapper'>
							<Link to='/' data-target='mobile-demo' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link>
							<Link to='/' className='brand-logo logo sidenav-trigger'>
								<img
									height='55px'
									width='60px'
									style={{ position: 'relative' }}
									src={logo}
									alt='logo-mob'
								/>
							</Link>
							{loadUser}
							<a className='right sidenav-trigger'>
								{reputation && <ReputationPoint ReputationPoint={reputation} />}
							</a>
							<ul id='dropdown1' className='dropdown-content' style={{ backgroundColor: 'black' }}>
								<li>
									<Link
										to='/industry'
										style={{ color: 'white', fontSize: '1.1em', paddingLeft: '25px' }}
									>
										Industry
									</Link>
								</li>
								<li>
									<Link
										to='/startup'
										style={{ color: 'white', fontSize: '1.1em', paddingLeft: '25px' }}
									>
										Start-ups
									</Link>
								</li>
								<li>
									<Link
										to='/venturehack'
										style={{ color: 'white', fontSize: '1.1em', paddingLeft: '25px' }}
									>
										Venture Hacks
									</Link>
								</li>
							</ul>
							<div className='navmenu'>
								<ul
									id='nav-mobilecomp-menu'
									style={{ backgroundColor: 'black' }}
									className='hide-on-med-and-down'
								>
									<li>
										<Link to='/' className='logo'>
											<img style={{ position: 'relative' }} src={logo} alt='logo' />
										</Link>
									</li>
									<li>
										<Link to='/jobs'>Jobs</Link>
									</li>
									<li>
										<Link to='/discounts'>Bazaar</Link>
									</li>
									<li>
										<Link to='/community'>Community</Link>
									</li>
									{/* <li>
										<Link to='/funding'>Funding</Link>
									</li> */}
									<li>
										<Link to='/industry' className='dropdown-trigger' data-target='dropdown1'>
											Research
										</Link>
									</li>
									<li>
										<Link to='/about'>About us</Link>
									</li>

									<li className='right'>
										<div
											style={{ padding: '0 25px 0 80px' }}
											className='dropdown-trigger'
											data-target='account-dropdown'
										>
											{reputation && <ReputationPoint ReputationPoint={reputation} />}
											<AccountIcon
												fontSize='large'
												className='nav-icon'
												style={{ verticalAlign: 'middle' }}
											/>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<ul id='account-dropdown' className='dropdown-content' style={{ backgroundColor: 'black' }}>
						{show()}

						<li>
							<Link to='/registerforproduct' style={{ color: 'white', fontSize: '1em' }}>
								Add product
							</Link>
						</li>
						<li>
							<Link to='/registerforjobs' style={{ color: 'white', fontSize: '1em' }}>
								Add job profile
							</Link>
						</li>
						<li>
							<Link to='/addjobs' style={{ color: 'white', fontSize: '1em' }}>
								Add jobs/interships
							</Link>
						</li>
					</ul>
				</div>
				<ul id='dropdown2' className='dropdown-content' style={{ backgroundColor: 'black' }}>
					<li>
						<Link to='/industry' style={{ color: 'white' }}>
							Industry
						</Link>
					</li>
					<li>
						<Link to='/startup' style={{ color: 'white' }}>
							Start-ups
						</Link>
					</li>
					<li>
						<Link to='/venturehack' style={{ color: 'white' }}>
							Venture Hacks
						</Link>
					</li>
				</ul>
				<ul className='sidenav' id='mobile-demo'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					{/* <li>
						<Link to='/funding'>Funding</Link>
					</li> */}
					<li>
						<Link to='/jobs'>Jobs</Link>
					</li>
					<li>
						<Link to='/discounts'>Bazaar</Link>
					</li>
					<li>
						<Link path='/community'>Community</Link>
					</li>
					<li>
						<a className='dropdown-trigger1' data-target='dropdown2'>
							Research<i className='material-icons right'>arrow_drop_side</i>
						</a>
					</li>

					{/* <li>
						<a onClick={handleClickOpen}>Dashboard</a>
					</li> */}
					<li>
						<Link to='/about'>About us</Link>
					</li>
					<li>
						<Link to='/registerforproduct'>Add product</Link>
					</li>
					<li>
						<Link to='/registerforjobs'>Add job profile</Link>
					</li>
					<li>
						<Link to='/addjobs'>Add jobs/interships</Link>
					</li>
					{showmobile()}
				</ul>
			</div>
		);
	}
};
export default Navbar;
