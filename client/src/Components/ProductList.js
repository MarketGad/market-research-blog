import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

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
	const showComment = (product) =>
		product.comments ? (
			product.comments.map((comment) => {
				if (comment.comment) {
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
				}
			})
		) : (
			<div className='center'> No Comments to show :( </div>
		);
	const showProducts = products.length ? (
		products.slice(0).reverse().map((product, index) => {
			return (
				<div>
					<ul className='collection product-container'>
						<li className='collection-item avatar'>
							<img className='circle pro-img' src={product.logo} alt={product.name} />
							<div className='product-right-container'>
								<a
									className='product-content product-name'
									style={{ color: 'black' }}
									href={'/p' + product._id}
								>
									{product.name}
								</a>
								<div className='product-desc'>{product.briefDescription}</div>
								<div className='row product-link-container'>
									<div className='col l10 s12'>
										<p className='product-link'>
											<span
												style={{
													position: 'relative',
													paddingRight: '5px',
													top: '-1px',
													verticalAlign: 'middle'
												}}
												className='material-icons'
											>
												link
											</span>
											<a className='links' href={product.websiteLink || product.playStoreLink}>
												{product.websiteLink || product.playStoreLink}
											</a>
										</p>
									</div>
									<div className='col l2 s12 comment-box'>
										<a
											href={'/p' + product._id}
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
										</a>
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
									<a className='comment-head product-content' href={'/p' + product._id}>
										Comments ({product.comments.length})
									</a>
									{showComment(product)}
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
