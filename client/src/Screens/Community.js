import React from 'react';
// import Joblist from '../Components/Joblist';
import PeopleList from '../Components/PeopleList';

const Community = (props) => {
	return (
		<div style={{ backgroundColor: 'rgb(249, 249, 249)' }}>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<div className='row' style={{ margin: '0', padding: '0' }}>
							<div className='col s12 m8'>
								<div className='product-page-head'>Disrupters' club</div>
								<h6 className='product-quote'>Latest cool products or ideas cooking in your mind</h6>
							</div>
							<div className='col s4'>
								<div className='right-align' style={{ paddingTop: '10px' }}>
									<a
										className='waves-effect waves-light btn-small pro-btn1 add-mobile-btn'
										href='/addtrend'
									>
										Start a trend
									</a>
								</div>
							</div>
						</div>
						{/* <Joblist /> */}
					</div>
					<div className='col s12 l4 joblist'>
						<div className='product-page-head left-head' style={{ paddingTop: '5px' }}>
							Leaderboard
						</div>
						<PeopleList jobProfiles={props.jobProfiles} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Community;
