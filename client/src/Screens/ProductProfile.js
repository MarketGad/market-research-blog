import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
	alignItems: 'center',
  },
  back: {
	  backgroundColor: 'white'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
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
		productEmail:'abc@product.com'
	},
	{
		productName: 'Anonymous Product',
		productImage: 'https://lorempixel.com/100/190/nature/6',
		productDesc: 'This product is great.This product is great.',
		productRating: '4',
		productLink: '!#',
		productContact: 'Phone Number: 000000000',
		productAddress: 'LL-40, New Delhi, India',
		productEmail:'abc@product.com'
	},
	{
		productName: 'Anonymous Product',
		productImage: 'https://lorempixel.com/100/190/nature/6',
		productDesc: 'This product is great.This product is great.',
		productRating: '5',
		productLink: '!#',
		productContact: 'Phone Number: 000000000',
		productAddress: 'LL-40, New Delhi, India',
		productEmail:'abc@product.com'
	}
  ];
  
  let id = props.match.params.product_id;
  const product = products[id];
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} xs={12} md={3} className={classes.back} >
		  <div style={{textAlign:'center'}}>
	  				<img
						src={product.productImage}
						alt={product.productName}
						style={{ width: '150px', height: '150px', borderRadius: '10px', marginTop: '17%'}}
					/>
			</div>
			<div
				className='article-subhead'
				style={{ fontFamily: 'GlacialIndifferenceBold', textAlign:'center' }}
			>
				{product.productName}&nbsp;
				<span style={{textAlign:'center'}}>
							<span
								style={{
									position: 'relative',
									padding: '5px',
									fontSize: '16px',
									color: '#ff9529'
								}}
								className='material-icons'
							>
								fiber_manual_record
							</span>
							<span style={{ fontFamily: 'GlacialIndifferenceBold', fontSize: '25px'}} >{product.productRating}</span>
			</span>
			</div>
			<div style={{marginTop:'10%'}}>
			<div
				className='article-subhead'
				style={{ fontFamily: 'GlacialIndifferenceBold', paddingLeft:'30%' }}
			>
				<span style={{textAlign:'center'}}>
							<span
								style={{
									position: 'relative',
									padding: '5px',
									fontSize: '16px',
									marginTop: '2%'
									
								}}
								className='material-icons'
							>
								 <ShopIcon />
							</span>
							<span style={{ fontFamily: 'GlacialIndifferenceBold', fontSize: '25px'}} ><a href="#">PlaySTore</a></span>
			</span>
			</div>
			<div
				className='article-subhead'
				style={{ fontFamily: 'GlacialIndifferenceBold', paddingLeft:'30%' }}
			>
				<span style={{textAlign:'center'}}>
							<span
								style={{
									position: 'relative',
									padding: '5px',
									fontSize: '16px',
									marginTop: '2%'
									
								}}
								className='material-icons'
							>
								 <AppleIcon />
							</span>
							<span style={{ fontFamily: 'GlacialIndifferenceBold', fontSize: '25px'}} ><a href="#">AppStore</a></span>
			</span>
			</div>
			<div
				className='article-subhead'
				style={{ fontFamily: 'GlacialIndifferenceBold', paddingLeft:'30%'}}
			>
				<span style={{textAlign:'center'}}>
							<span
								style={{
									position: 'relative',
									padding: '5px',
									fontSize: '16px',
									marginTop: '2%'
									
								}}
								className='material-icons'
							>
								 <LinkIcon />
							</span>
							<span style={{ fontFamily: 'GlacialIndifferenceBold', fontSize: '25px'}} ><a href="#">Website</a></span>
			</span>
			</div>
			</div>
	  </Grid>
      <Grid item xs={12} sm={12} md={9} className={classes.back} elevation={6} square>
		<div style={{margin: '7%'}}>
		<p className="article-subhead"><b>About</b></p>
		<p className="article-content">{product.productDesc}</p>
		</div>
		<div style={{margin: '7%'}}>
			<p className="article-subhead"><h6><b>Contact</b></h6></p>
			<p className="article-content">{product.productContact}</p>
			<p className="article-subhead"><h6><b>Address</b></h6></p>
			<p className="article-content">{product.productAddress}</p>
			<p className="article-subhead"><h6><b>Email</b></h6></p>
			<p className="article-content">{product.productEmail}</p>
		</div>
      </Grid>
    </Grid>
  );
};

export default ProductProfile;


