import React from 'react';

const ShowComment = (props) => {
	const comment = props.comment;
	if (comment) {
		return (
			<div>
				<ul className='collection comment' style={{ border: 'none' }}>
					<li
						className='collection-item avatar'
						style={{
							minHeight: '0',
							paddingLeft: '60px'
						}}
					>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiUY7RQ-eUe_fmk6--gEvDXvallGC7ZA7suQ&usqp=CAU'
							alt=''
							className='circle'
							style={{ left: '5px' }}
						/>
						<div className='title'>
							<b>
								{comment.author.firstname} {comment.author.lastname}
							</b>
						</div>
						<p>{comment.comment}</p>
					</li>
				</ul>
			</div>
		);
	} else {
		return <div>no comment..</div>;
	}
};
export default ShowComment;
