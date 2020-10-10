import React from 'react';
import FadingLoader from './FadingLoader';
import JobsandInternshipcard from './JobsandInternshipcard';

const Internshiplist = (props) => {

	const showInternships = props.internship.length ? (
		props.internship.map((internship, index) => {
			if (!/^https?:\/\//.test(internship.jobLink)) {
				let weblink = 'https://' + internship.jobLink;
				return <JobsandInternshipcard key={index} jobdetails={internship} weblink={weblink} />;
			} else return <JobsandInternshipcard key={index} jobdetails={internship} weblink={internship.jobLink} />;
		})
	) : (
		<div className='center'> Loading... </div>
	);
	return (
		<div>
			{props.internship[0] && <div>{showInternships}</div>}
			{props.internship.length === 0 && (
				<div>
					<FadingLoader loadno={3} />
				</div>
			)}
		</div>
	);
};
export default Internshiplist;
