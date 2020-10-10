import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const ReputationPoint = (props) => {
	const value = props.ReputationPoint;
	return (
		<span>
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
			<Tooltip title='Reputation Points i.e Likes: 1 Comments:4)' placement='left-start'>
				<span style={{ fontSize: '16px', paddingRight: '5px', fontWeight: '600' }}>{value}</span>
			</Tooltip>
		</span>
	);
};

export default ReputationPoint;
