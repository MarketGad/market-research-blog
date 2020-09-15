import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import ShowComment from './ShowComment';
import LinkIcon from '@material-ui/icons/Link';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const [ products, setProducts ] = React.useState('');

	const loadProducts = async () => {
		try {
			const res = await fetch('http://localhost:5000/api/productdetails');
			const data = await res.json();
			setProducts(data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);
	const addUpvote = (product_id) => {
		console.log(product_id);
		const token = Cookies.get('session-id');
		console.log(token);
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		axios.post('http://localhost:5000/api/productdetails/' + product_id + '/upvotes/add', {}, config).then(
			(response) => {
				console.log(response);
				alert('upvote added');
				window.location.reload();
			},
			(error) => {
				console.log(error);
				if (token) {
					alert('upvote already added');
				} else {
					alert('please login in to upvote');
				}
			}
		);
	};

	const showProducts = products.length ? (
		products.slice(0).reverse().map((product, index) => {
			return (
				<div>
					<ul className='collection product-container'>
						<li className='collection-item avatar'>
							<img className='circle pro-img' src={product.logo} alt={product.name} />
							<div className='product-right-container'>
								<Link
									style={{ color: 'black' }}
									className='product-content product-name'
									to={{
										pathname: `/p${product._id}`,
										state: { product: product }
									}}
								>
									{product.name}
								</Link>
								<div className='product-desc'>{product.briefDescription}</div>
								<div className='row product-link-container'>
									<div className='col l10 s12'>
										<div className='product-list-link'>
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
									</div>
									<div className='col l2 s12 comment-box'>
										<Link
											to={{
												pathname: `/p${product._id}`,
												state: { product: product }
											}}
											className='waves-effect waves-light btn-small comment-btn1'
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
								<div className='secondary-content upvote-container'>
									<i
										className='medium upvote-icon material-icons'
										onClick={() => addUpvote(product._id)}
									>
										arrow_drop_up
									</i>
									<br />
									<span className='upvote-count'>{product.upvotes}</span>
								</div>
								<div className='comment-container'>
									<Link
										to={{
											pathname: `/p${product._id}`,
											state: { product: product }
										}}
										className='comment-head product-content'
									>
										Comments ({product.comments.length})
									</Link>
									<ShowComment comment={product.comments[0]} />
								</div>
							</div>
						</li>
					</ul>
				</div>
			);
		})
	) : (
		<div className='center'> Loading... </div>
	);

	return <div>{showProducts}</div>;
};

export default ProductList;
