import React, { useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
// import Footer2 from '../Components/Footer2';
import Cookies, { set } from 'js-cookie';
import ShowComment from '../Components/ShowComment';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		color: '#080808d9',
		backgroundColor: 'transparent',
		fontSize: '48vw'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		padding: '10px 5px'
	},
	submit: {
		height: '3.8em',
		margin: theme.spacing(0, 1, 0),
		fontWeight: '800'
	}
}));

const ProductProfile = (props) => {
	const classes = useStyles();
	const [ comment, setComment ] = React.useState('');
	const [ readytocomment, setReadytoComment ] = React.useState('');
	const id = props.match.params.product_id;
	const product = props.location.state.product;
	const weblink = props.location.state.weblink;
	const comments = product.comments;
	const history = useHistory();

	const showComment = comments.length ? (
		comments.map((comment) => {
			if (comment) {
				return <ShowComment comment={comment} />;
			}
		})
	) : (
		<div className='center'> No Comments to show :( </div>
	);
	const submitHandler = (e) => {
		e.preventDefault();
		const token = Cookies.get('session-id');
		if (!token) {
			setReadytoComment(false);
		}
		if (comment) {
			const config = {
				headers: {
					Authorization: `Bearer  ${token}`
				}
			};
			axios
				.post(
					'http://localhost:5000/api/productdetails/' + id + '/comments',
					{
						comment: comment
					},
					config
				)
				.then(
					(response) => {
						console.log(response);
						if (response.data) {
							alert('comment added');
							history.goBack();
						}
					},
					(error) => {
						alert('please login to continue');
					}
				);
		} else {
			alert('empty comment');
		}
	};
	if (readytocomment === false) {
		return <Redirect to='/signin' />;
	} else if (product.name) {
		return (
			<div className='productdetails-container'>
				<Grid container component='main'>
					<Grid item xs={12} md={3}>
						<div className='center'>
							<img src={product.logo} alt={product.name} className='details-page-logo' />
							<div className='article-subhead center' style={{ fontFamily: 'GlacialIndifferenceBold' }}>
								{product.name}
							</div>
						</div>
						<div className='link-container'>
							{product.websiteLink.length > 0 && (
								<div>
									<span>
										<span className='material-icons job-link-icons'>
											<LinkIcon />
										</span>
										<span>
											<a
												className='links'
												target='_blank'
												rel='noopener noreferrer'
												href={weblink}
											>
												{product.websiteLink}
											</a>
										</span>
									</span>
								</div>
							)}
							{product.playStoreLink.length > 0 && (
								<div>
									<span>
										<span className=' material-icons job-link-icons'>
											<ShopIcon />
										</span>
										<span>
											<a className='links' href={product.playStoreLink}>
												{product.name}
											</a>
										</span>
									</span>
								</div>
							)}
							{product.appStoreLink.length > 0 && (
								<div>
									<span>
										<span className='material-icons job-link-icons'>
											<AppleIcon />
										</span>
										<span>
											<a className='links' href={product.appStoreLink}>
												{product.name}
											</a>
										</span>
									</span>
								</div>
							)}
						</div>
						<div className='contact-container'>
							<p className='product-subhead'>Contact</p>
							<p className='product-content'>
								{product.pointOfContact} <br />
								{product.emailId}
							</p>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={9} className='product-details-right-container'>
						<div>
							<div className='product-head'>About</div>
							<div style={{ padding: '10px 0' }} className='article-content'>
								{product.detailedDescription}
							</div>
						</div>
						<div>
							<div className='row'>
								<div className='col s12 l11' style={{ padding: '0', margin: '0' }}>
									<div className='card'>
										<div className='card-content'>
											<span className='card-title product-comment'>
												Comments ({product.comments.length})
											</span>
											<form className={classes.form} onSubmit={submitHandler}>
												<Grid container spacing={2}>
													<Grid item xs={8}>
														<TextField
															fullWidth
															id='outlined-textarea'
															label='Comment'
															placeholder='Write your comment'
															multiline
															variant='outlined'
															value={comment}
															onChange={(e) => setComment(e.target.value)}
														/>
													</Grid>
													<Grid item xs={3}>
														<Button
															type='submit'
															variant='contained'
															className={classes.submit}
														>
															Add Comment
														</Button>
													</Grid>
												</Grid>
											</form>
											{showComment}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
				{/* <Footer2 /> */}
			</div>
		);
	} else return <div className='center'>Loading...</div>;
};

export default ProductProfile;
