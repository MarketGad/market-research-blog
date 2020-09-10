import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	}
}));

const ProductProfile = (props) => {
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
	const id = props.match.params.product_id;
	const showProducts = products.length ? (
		products.map((product, index) => {
			if (product._id === id)
				return (
					<Grid container component='main'>
						<Grid item xs={12} md={3} style={{ marginTop: '5%' }}>
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
							<div
								style={{
									// textAlign: 'center',
									fontSize: '1.5em',
									fontFamily: 'GlacialIndifferenceMedium',
									margin: '10% 30%'
								}}
							>
								<div>
									<span>
										<span
											style={{
												position: 'relative',
												padding: '0 5px',
												top: '4px'
											}}
											className='material-icons'
										>
											<LinkIcon />
										</span>
										<span>
											<a href={product.websiteLink}>{product.websiteLink}</a>
										</span>
									</span>
									<div>
										<span
											style={{
												position: 'relative',
												top: '2px',
												padding: '0 5px'
											}}
											className='material-icons'
										>
											<ShopIcon />
										</span>
										<span>
											<a href={product.playStoreLink}>{product.playStoreLink}</a>
										</span>
									</div>
									<div>
										<span>
											<span
												style={{
													position: 'relative',
													padding: '0 5px',
													top: '2px'
												}}
												className='material-icons'
											>
												<AppleIcon />
											</span>
											<span>
												<a href={product.appStoreLink}>{product.appStoreLink}</a>
											</span>
										</span>
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={9} style={{ marginTop: '3%', paddingLeft: '2%' }}>
							<div style={{ width: '90%' }}>
								<p className='product-head'>About</p>
								<p className='product-content'>{product.detailedDescription}</p>
							</div>
							<div style={{ marginTop: '5%' }}>
								<p className='product-subhead'>Contact</p>
								<p className='product-content'>{product.pointOfContact}</p>

								<p className='product-subhead'>Email</p>
								<p className='product-content'>{product.emailId}</p>
							</div>
						</Grid>
					</Grid>
				);
		})
	) : (
		<div className='center'> No Products to show: ( </div>
	);
	console.log(products);
	return <div>{showProducts}</div>;
};

export default ProductProfile;
