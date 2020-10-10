import React from 'react';
import FadingLoader from './FadingLoader';
import JobsandInternshipcard from './JobsandInternshipcard';

const Joblist = (props) => {

	const showJobs = props.jobs.length ? (
		props.jobs.map((job, index) => {
			if (!/^https?:\/\//.test(job.jobLink)) {
				let weblink = 'https://' + job.jobLink;
				return <JobsandInternshipcard key={index} jobdetails={job} weblink={weblink} />;
			} else return <JobsandInternshipcard key={index} jobdetails={job} weblink={job.jobLink} />;
		})
	) : (
		<div className='center'> Loading... </div>
	);
	return (
		<div>
			{props.jobs[0] && <div>{showJobs}</div>}
			{props.jobs.length === 0 && (
				<div>
					<FadingLoader loadno={3} />
				</div>
			)}
		</div>
	);
};

export default Joblist;
