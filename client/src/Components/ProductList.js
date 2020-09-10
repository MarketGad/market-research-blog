import React from 'react';
import Cookies from 'js-cookie';

const ProductList = () => {
	const products = [
		{
			productName: 'MarketGad',
			productImage: 'https://lorempixel.com/100/190/nature/6',
			productDesc: 'This product is great.This product is great.',
			productRating: '3',
			productLink: '!#'
		},
		{
			productName: 'Inshaan',
			productImage: 'https://lorempixel.com/100/190/nature/6',
			productDesc: 'This product is great.This product is great.',
			productRating: '4',
			productLink: '!#'
		},
		{
			productName: 'Geeksforgeeks',
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
					<ul className='collection' style={{ borderRadius: '5px' }}>
						<li className='collection-item avatar'>
							<img
								src={product.productImage}
								alt={product.productName}
								className='circle pro-img'
								style={{ width: '100px', height: '100px' }}
							/>
							<div style={{ paddingLeft: '8%' }}>
								<a className='title' href={'/p' + index}>
									<b>{product.productName}</b>
								</a>
								<p>{product.productDesc}</p>

								<a
									className='secondary-content'
									style={{
										textAlign: 'center',
										color: '#080808d9'
									}}
								>
									<i className='medium material-icons' style={{ margin: '0 1%' }}>
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
										20
									</span>
								</a>
								<div className='waves-effect waves-light btn-small comment-btn1'>
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
									<input type='text' style={{ width: '70%' }} placeholder='Enter Comment' />
									<button className='waves-effect waves-light btn-small pro-btn1' type='submit'>
										Add Comment
									</button>
								</form>
							</div>
						</li>
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
