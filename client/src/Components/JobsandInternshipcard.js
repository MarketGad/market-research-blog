import React from 'react';
import Cookies from 'js-cookie';
import Popup from './Popup';
import SignIn from '../Screens/signin';

const JobsandInternshipcard = (props) => {
	const isLoggedin = Cookies.get('session-id');
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const job = props.jobdetails;
	const weblink = isLoggedin ? props.weblink : '/jobs';

	return (
		<li className='collection-item avatar'>
			<img className='circle job-img' src={job.logo} alt={job.companyName} />
			<div className='job-right-container'>
				<div className='product-name'>{job.companyName}</div>
				<div className='job-desc'>{job.title}</div>
				<div className='secondary-content'>
					<div className='row product-link-container'>
						<div className='col s12' style={{ marginTop: '5px' }}>
							{!isLoggedin && (
								<a
									onClick={() => setOpenSignin(true)}
									className='waves-effect waves-light btn hire-connect-btn'
								>
									<span>Apply</span>
									<span
										className='material-icons'
										style={{
											position: 'relative',
											padding: '0 5px',
											fontSize: '16px'
										}}
									>
										touch_app
									</span>
								</a>
							)}

							{isLoggedin && (
								<a
									target='_blank'
									rel='noopener noreferrer'
									href={weblink}
									className='waves-effect waves-light btn hire-connect-btn'
								>
									<span>Apply</span>
									<span
										className='material-icons'
										style={{
											position: 'relative',
											padding: '0 5px',
											fontSize: '16px'
										}}
									>
										touch_app
									</span>
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
			<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
				<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
			</Popup>
		</li>
	);
};
export default JobsandInternshipcard;
