import React, { useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Footer2 from '../Components/Footer2';
import Cookies from 'js-cookie';
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
		margin: theme.spacing(1, 1, 0),
		fontWeight: '800'
	}
}));

const ProductProfile = (props) => {
	const classes = useStyles();
	const [ comment, setComment ] = React.useState('');
	const id = props.match.params.product_id;
	const product = props.location.state.product;
	console.log(product);

	const showComment = product.comments ? (
		product.comments.map((comment) => {
			if (comment.comment) {
				return <ShowComment product={product} />;
			}
		})
	) : (
		<div className='center'> No Comments to show :( </div>
	);
	const submitHandler = (e) => {
		e.preventDefault();
		const token = Cookies.get('session-id');
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
						window.location.reload(false);
					}
				},
				(error) => {
					alert('please login to continue');
				}
			);
	};
	if (product.name) {
		return (
			<div className='productdetails-container'>
				<Grid container component='main'>
					<Grid item xs={12} md={3}>
						<div style={{ textAlign: 'center' }}>
							<img
								src={product.logo}
								alt={product.name}
								style={{ width: '200px', height: '200px', borderRadius: '7px' }}
							/>
							<div
								className='article-subhead'
								style={{ fontFamily: 'GlacialIndifferenceBold', textAlign: 'center' }}
							>
								{product.name}
							</div>
						</div>
						<div className='link-container'>
							<div>
								<span>
									<span className='material-icons job-link-icons'>
										<LinkIcon />
									</span>
									<span>
										<a className='links' href={product.websiteLink}>
											{product.websiteLink}
										</a>
									</span>
								</span>
							</div>
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
						</div>
						<div className='contact-container'>
							<p className='product-subhead'>Contact</p>
							<p className='product-content'>{product.pointOfContact}</p>

							<p className='product-subhead'>Email</p>
							<p className='product-content'>{product.emailId}</p>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={9} style={{ paddingLeft: '2%' }}>
						<div style={{ width: '90%' }}>
							<div className='product-head'>About</div>
							<p className='product-content'>{product.detailedDescription}</p>
						</div>

						<div>
							<div className='row'>
								<div className='col s12 l10' style={{ padding: '0', margin: '0' }}>
									<div className='card'>
										<div className='card-content' style={{ padding: '15px' }}>
											<span className='card-title product-comment'>
												Comments ({product.comments.length})
											</span>
											<form className={classes.form} onSubmit={submitHandler}>
												<Grid container spacing={2}>
													<Grid item sm={10} style={{ padding: '10px' }}>
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
													<Grid item sm={2}>
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
