import React from 'react';
import { Link } from 'react-router-dom';

const ShowComment = (props) => {
	const comment = props.comment;
	const author = props.comment.author;
	const profilePic = author.profilePic
		? author.profilePic
		: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiUY7RQ-eUe_fmk6--gEvDXvallGC7ZA7suQ&usqp=CAU';

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
							src={profilePic}
							alt={comment.author.firstname}
							className='circle'
							style={{ left: '5px' }}
						/>
						<div className='title'>
							<Link style={{ color: 'black' }} to={`/profile/${author._id}`}>
								<b>
									{comment.author.firstname} {comment.author.lastname}
								</b>
							</Link>
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
