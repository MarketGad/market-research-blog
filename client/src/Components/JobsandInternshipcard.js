import React from 'react';

const JobsandInternshipcard = (props) => {
	const job = props.jobdetails;
	const weblink = props.weblink;
	return (
		<div>
			<ul className='collection job-container'>
				<li className='collection-item avatar'>
					<img className='circle job-img' src={job.logo} alt={job.companyName} />
					<div className='job-right-container'>
						<div className='product-name'>{job.companyName}</div>
						<div className='job-desc'>{job.title}</div>
						<div className='secondary-content'>
							<div className='row product-link-container'>
								<div className='col s12' style={{ marginTop: '5px' }}>
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
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};
export default JobsandInternshipcard;
