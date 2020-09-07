import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(1),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		color: '#080808d9',
		backgroundColor: 'transparent'
	},
	form: {
		width: '95%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(1, 0, 1, 0)
	},
	userdisp: {
		marginTop: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	userimg: {
		borderRadius: '10px',
		height: '10rem',
		width: '50%',
		margin: '0 25%'
	}
}));

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const ProductList = () => {
	const classes = useStyles();
	const [ Productopen, setProduct ] = React.useState(false);

	const handleClickProduct = () => {
		setProduct(true);
	};

	const handleCloseProduct = () => {
		setProduct(false);
	};

	const showComment = () => {
		var x = document.getElementById('comment-form');
		if (x.style.display === 'none') {
			x.style.display = 'block';
		} else {
			x.style.display = 'none';
		}
	};

	const products = [
		{
			productName: 'Anonymous Product',
			productImage: 'https://lorempixel.com/100/190/nature/6',
			productDesc: 'This product is great.This product is great.',
			productRating: '3',
			productLink: '!#'
		},
		{
			productName: 'Anonymous Product',
			productImage: 'https://lorempixel.com/100/190/nature/6',
			productDesc: 'This product is great.This product is great.',
			productRating: '4',
			productLink: '!#'
		},
		{
			productName: 'Anonymous Product',
			productImage: 'https://lorempixel.com/100/190/nature/6',
			productDesc: 'This product is great.This product is great.',
			productRating: '5',
			productLink: '!#'
		}
	];

	const showProducts = products.length ? (
		products.map((product, index) => {
			const cookie = Cookies.get('session-id');
			console.log(cookie);
			return (
				<div>
					<ul className='collection'>
						<li className='collection-item avatar'>
							<img
								src={product.productImage}
								alt=''
								className='circle pro-img'
								style={{ height: '50px', width: '50px' }}
							/>
							<a className='title' href= {'/p' + index }>
								<b>{product.productName}</b>
							</a>
							<p>
								{product.productDesc}
								<br />
							</p>

							<a href={product.productLink} className='secondary-content'>
								<i className='medium material-icons download-icon'>arrow_drop_up</i>
							</a>
							<div />
							<div className='waves-effect waves-light btn-small comment-btn1' onClick={showComment}>
								Comments
								<span
									className='material-icons'
									style={{
										position: 'relative',
										top: '4px',
										padding: '5px',
										fontSize: '16px'
									}}
								>
									chat
								</span>
							</div>
							<form id='comment-form' style={{ display: 'none' }}>
								<input type='text' style={{ width: '75%' }} placeholder='Enter Comment' />
								<button className='waves-effect waves-light btn-small pro-btn1' type='submit'>
									Add Comment
								</button>
							</form>
						</li>
						<Dialog
							open={Productopen}
							TransitionComponent={Transition}
							keepMounted
							onClose={handleCloseProduct}
							aria-labelledby='alert-dialog-slide-title'
							aria-describedby='alert-dialog-slide-description'
						>
							<div>
								<Container component='main' maxWidth='sm'>
									<CssBaseline />
									<div className={classes.userdisp} style={{ paddingTop: '2%', paddingBottom: '2%' }}>
										<img
											className={classes.userimg}
											src={product.productImage}
											alt={product.productName}
										/>
										<div
											className='article-subhead'
											style={{ color: '#0153a5', fontFamily: 'GlacialIndifferenceBold' }}
										>
											{product.productName}
										</div>
										<br />
										<div className='article-content'>
											<b>Description :</b>
											<br /> {product.productDesc}
										</div>
										<br />
										<div
											className='secondary-content'
											style={{
												marginTop: '-2%',
												backgroundColor: '#ff9529',
												padding: '0 5px',
												borderRadius: '10px',
												color: '#fff',
												width: 'fit-content'
											}}
										>
											<span style={{ fontSize: '16px', display: 'inline' }}>
												{product.productRating}
											</span>
											<span
												style={{
													position: 'relative',
													top: '2px',
													padding: '2px',
													fontSize: '16px'
												}}
												className='material-icons'
											>
												grade
											</span>
										</div>
										<Button
											onClick={handleCloseProduct}
											fullWidth
											variant='contained'
											color='primary'
											className={classes.submit}
											style={{ fontFamily: 'GlacialIndifferenceBold' }}
										>
											Close
										</Button>
									</div>
								</Container>
							</div>
						</Dialog>
					</ul>
				</div>
			);
		})
	) : (
		<div className='center'> No Products to show: ( </div>
	);

	return <div>{showProducts}</div>;
};

export default ProductList;
