import React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import FadingLoader from './FadingLoader';
import SignIn from '../Screens/signin';
import Popup from '../Components/Popup';

import { Link, Redirect } from 'react-router-dom';

const ProductList = (props) => {
	const token = Cookies.get('session-id');
	// const [ products, setProducts ] = React.useState('');
	const [ readytoupvote, setReadytoupvote ] = React.useState('');
	const [ openSignin, setOpenSignin ] = React.useState(false);
	if (token) {
		const token_id = JSON.parse(atob(token.split('.')[1]));
		var user_id = token_id._id;
	}
	const ProductCard = (props) => {
		const product = props.product;
		const weblink = props.weblink;
		const [ upvote, setUpvote ] = React.useState(product.upvotes);
		const [ activeupvote, setactiveupvote ] = React.useState(false);

		const addUpvote = (product_id, product) => {
			if (!token) {
				setOpenSignin(true);
				return;
			}
			const config = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};
			const token_info = JSON.parse(atob(token.split('.')[1]));
			if (product.upvotesList.includes(token_info._id)) {
				alert('already upvoted');
			} else {
				setUpvote(product.upvotes + 1);
				setactiveupvote(true);
				axios
					.post(
						process.env.REACT_APP_BASEURL + '/api/productdetails/' + product_id + '/upvotes/add',
						{},
						config
					)
					.then(
						(response) => {
							console.log('added');
						},
						(error) => {
							console.log(error);
							// alert(error);
						}
					);
			}
		};

		return (
			<div>
				<ul className='collection product-container'>
					<li className='collection-item avatar'>
						<Link to={`products/${product._id}`}>
							<img className='circle pro-img' src={product.logo} alt={product.name} />
						</Link>

						<div className='product-right-container'>
							<Link
								style={{ color: 'black' }}
								className='product-content product-name'
								to={`products/${product._id}`}
							>
								{product.name}
							</Link>
							<div className='product-desc'>{product.briefDescription}</div>
							<div className='row product-link-container'>
								<div className='col l1 s3 comment-box'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href={weblink}
										className='waves-effect waves-light btn-small visit-btn'
									>
										{/* <span className='comment-count'>visit</span> */}
										<span
											className='material-icons chat-icon'
											style={{
												position: 'relative',
												padding: '0 5px',
												fontSize: '16px'
											}}
										>
											near_me
										</span>
									</a>
								</div>
								<div className='col l2 s4 comment-box'>
									<Link
										to={`products/${product._id}`}
										className='waves-effect waves-light btn-small visit-btn'
									>
										<span className='comment-count'>{product.comments.length}</span>
										<span
											className='material-icons chat-icon'
											style={{
												position: 'relative',
												padding: '0 5px',
												fontSize: '16px'
											}}
										>
											chat
										</span>
									</Link>
								</div>
							</div>
							{product.upvotesList.includes(user_id) && (
								<div id='upvote-count' className='secondary-content upvote-container-active'>
									<i className='medium upvote-icon material-icons'>arrow_drop_up</i>
									<br />
									<span className='upvote-count upvote-count-active'>{upvote}</span>
								</div>
							)}
							{activeupvote === true && (
								<div id='upvote-count' className='secondary-content upvote-container-active'>
									<i className='medium upvote-icon material-icons'>arrow_drop_up</i>
									<br />
									<span className='upvote-count upvote-count-active'>{upvote}</span>
								</div>
							)}
							{(!product.upvotesList.includes(user_id) || !token) &&
							activeupvote === false && (
								<div
									onClick={() => addUpvote(product._id, product)}
									className='secondary-content upvote-container'
								>
									<i className='medium upvote-icon material-icons'>arrow_drop_up</i>
									<br />
									<span className='upvote-count'>{upvote}</span>
								</div>
							)}

							{/* {product.comments.length > 0 && (
								<div className='comment-container'>
									<ShowComment comment={product.comments[0]} />
								</div>
							)} */}
						</div>
					</li>
				</ul>
			</div>
		);
	};

	const showProducts = props.products.length ? (
		props.products.map((product, index) => {
			if (!/^https?:\/\//.test(product.websiteLink)) {
				let weblink = 'https://' + product.websiteLink;
				return <ProductCard key={index} product={product} weblink={weblink} />;
			} else return <ProductCard key={index} product={product} weblink={product.websiteLink} />;
		})
	) : (
		<div className='center' />
	);

	return (
		<div>
			<div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
				{props.products && <div>{showProducts}</div>}
				{props.products.length === 0 && (
					<div>
						<FadingLoader loadno={5} />
					</div>
				)}
			</div>
			<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
				<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
			</Popup>
		</div>
	);
};

export default ProductList;
