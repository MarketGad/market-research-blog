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
			}
		);
	};
	const showProducts = products.length ? (
		products.slice(0).reverse().map((product, index) => {
			return (
				<div>
					<ul className='collection' style={{ borderRadius: '5px', height: '150px', padding: '10px 5px' }}>
						<li className='collection-item avatar'>
							<img
								src={product.logo}
								alt={product.name}
								className='circle pro-img'
								style={{ width: '100px', height: '100px', borderRadius: '5px' }}
							/>
							<div style={{ paddingLeft: '8%', width: '90%' }}>
								<a className='product-content' style={{ color: 'black' }} href={'/p' + product._id}>
									{product.name}
								</a>
								<p className='product-desc'>{product.briefDescription}</p>
								<div className='row' style={{ padding: '5px 0' }}>
									<div className='col l10'>
										<p className='product-link'>
											<span
												style={{
													position: 'relative',
													paddingRight: '5px',
													top: '4px'
												}}
												className='material-icons'
											>
												link
											</span>
											<a
												style={{
													color: '#0153a5'
												}}
												href={product.websiteLink || product.playStoreLink}
											>
												{product.websiteLink || product.playStoreLink}
											</a>
										</p>
									</div>
									<div className='col l2' style={{ marginTop: '8px' }}>
										<a
											href={'/p' + product._id}
											className='waves-effect waves-light btn-small comment-btn1'
										>
											<span
												style={{
													position: 'relative',
													top: '-3px',
													fontSize: '16px',
													fontWeight: '600'
												}}
											>
												{product.comments.length}
											</span>
											<span
												className='material-icons'
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

								<a
									className='secondary-content'
									style={{
										textAlign: 'center',
										color: '#080808d9'
									}}
								>
									<i
										className='medium material-icons'
										onClick={() => addUpvote(product._id)}
										style={{ margin: '0 1%' }}
									>
										arrow_drop_up
									</i>
									<span
										style={{
											fontSize: '1.5em',
											textAlign: 'center',
											position: 'relative',
											top: '-1em'
										}}
									>
										{product.upvotes}
									</span>
								</a>

								{/* <form id='comment-form'>
									<input type='text' style={{ width: '70%' }} placeholder='Enter Comment' />
									<button className='waves-effect waves-light btn-small pro-btn1' type='submit'>
										Add Comment
									</button>
								</form> */}
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
