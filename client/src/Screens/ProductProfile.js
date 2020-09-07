import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
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
	const classes = useStyles();

	const products = [
		{
			productName: 'Anonymous Product',
			productImage: 'https://lorempixel.com/100/190/nature/6',
			productDesc: 'This product is great.This product is great.',
			productRating: '3',
			productLink: '!#',
			productContact: 'Phone Number: 000000000',
			productAddress: 'LL-40, New Delhi, India',
			productEmail: 'abc@product.com'
		},
		{
			productName: 'Anonymous Product',
			productImage: 'https://lorempixel.com/100/190/nature/6',
			productDesc: 'This product is great.This product is great.',
			productRating: '4',
			productLink: '!#',
			productContact: 'Phone Number: 000000000',
			productAddress: 'LL-40, New Delhi, India',
			productEmail: 'abc@product.com'
		},
		{
			productName: 'Anonymous Product',
			productImage: 'https://lorempixel.com/100/190/nature/6',
			productDesc: 'This product is great.This product is great.',
			productRating: '5',
			productLink: '!#',
			productContact: 'Phone Number: 000000000',
			productAddress: 'LL-40, New Delhi, India',
			productEmail: 'abc@product.com'
		}
	];

	let id = props.match.params.product_id;
	const product = products[id];
	return (
		<Grid container component='main'>
			<Grid item xs={12} md={3} style={{ marginTop: '5%' }}>
				<div style={{ textAlign: 'center' }}>
					<img
						src={product.productImage}
						alt={product.productName}
						style={{ width: '200px', height: '200px', borderRadius: '7px' }}
					/>
					<div
						className='article-subhead'
						style={{ fontFamily: 'GlacialIndifferenceBold', textAlign: 'center' }}
					>
						{product.productName}
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
							<a style={{ color: 'black' }} href='!#'>
								Link
							</a>
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
								<a style={{ color: 'black' }} href='#'>
									Appstore
								</a>
							</span>
						</span>
					</div>
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
								<a style={{ color: 'black' }} href='#'>
									Website
								</a>
							</span>
						</span>
					</div>
				</div>
			</Grid>
			<Grid item xs={12} sm={12} md={9} style={{ marginTop: '3%', paddingLeft: '2%' }}>
				<div style={{ width: '90%' }}>
					<p className='product-head'>About</p>
					<p className='product-content'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nemo voluptates consectetur
						magnam molestiae fugiat inventore. Accusamus fugiat voluptatum ipsam unde, placeat non quia
						molestiae quod laboriosam sit, delectus impedit eum a sed sequi? Molestiae incidunt repudiandae
						veniam. Accusantium quasi cupiditate, deserunt rerum similique ullam quaerat, quidem sequi
						repellat culpa commodi quisquam nihil in dicta, accusamus quos saepe doloribus placeat nostrum
						quibusdam! Dicta vel officia esse assumenda pariatur quibusdam dolorem saepe atque voluptate.
						Officiis quae repellat placeat. Aperiam quos, perferendis nobis laborum corrupti voluptatibus
						voluptate suscipit consequatur natus pariatur, ipsum eaque nulla dolor deleniti adipisci, rerum
						ducimus dolore aut. Magni, incidunt doloribus. Quis, tempore impedit iusto accusamus quia
						obcaecati, veritatis sapiente ducimus maxime, sunt consequuntur nesciunt minus ut repellat a ea
						commodi quidem praesentium? Quia ea exercitationem, veniam nesciunt quasi dolorem illum magni
						odio laborum excepturi assumenda ullam cupiditate sunt deleniti reiciendis provident iusto
						doloremque nisi repellat. Error itaque delectus optio non dolorum, a ratione. Earum tempore eius
						esse adipisci possimus nam voluptates temporibus aspernatur provident nulla molestiae repellat
						libero repellendus obcaecati quis, quo quod vero perferendis! Sunt a rerum facere velit sequi
						alias in iure libero, culpa ipsum modi aspernatur, aliquam quasi inventore deleniti
						consequuntur? Aliquid sunt exercitationem officia.
					</p>
				</div>
				<div style={{ marginTop: '5%' }}>
					<p className='product-subhead'>Contact</p>
					<p className='product-content'>{product.productContact}</p>
					<p className='product-subhead'>Address</p>
					<p className='product-content'>{product.productAddress}</p>
					<p className='product-subhead'>Email</p>
					<p className='product-content'>{product.productEmail}</p>
				</div>
			</Grid>
		</Grid>
	);
};

export default ProductProfile;
