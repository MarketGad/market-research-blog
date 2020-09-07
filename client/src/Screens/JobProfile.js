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
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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

const JobProfile = (props) => {
  const classes = useStyles();

  const people = [
	{
		userName: 'Anonymous User',
		userImage: 'https://lorempixel.com/100/190/nature/6',
		userSkills: 'Lorem, Lorem, Lorem, Lorem',
		userEmail: 'abc@gmail.com',
		userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
		userLocation: 'Mumbai, Maharashtra, India',
		userExperience: '2+ years of experience in lore, lorem, lorem, lorem. 1+ years of exeperience in so and so',
		userQualification: 'Lorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, Lorem',
		userGrade: '5'
	},
	{
		userName: 'Example Name',
		userImage: 'https://lorempixel.com/100/190/nature/6',
		userSkills: 'Lorem, Lorem, Lorem, Lorem',
		userEmail: 'abc@gmail.com',
		userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
		userLocation: 'Mumbai, Maharashtra, India',
		userExperience: '2+ years of experience in lore, lorem, lorem, lorem',
		userQualification: 'Lorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, Lorem',
		userGrade: '6'
	},
	{
		userName: 'Anonymous User',
		userImage: 'https://lorempixel.com/100/190/nature/6',
		userSkills: 'Lorem, Lorem, Lorem, Lorem',
		userEmail: 'abc@gmail.com',
		userDesc: 'I am skilled in lorem,lore,lorem,lorem',
		userLocation: 'Mumbai, Maharashtra, India',
		userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
		userQualification: 'Lorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, Lorem',
		userGrade: '7'
	},
	{
		userName: 'Anonymous User',
		userImage: 'https://lorempixel.com/100/190/nature/6',
		userSkills: 'Lorem, Lorem, Lorem, Lorem',
		userEmail: 'abc@gmail.com',
		userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
		userLocation: 'Mumbai, Maharashtra, India',
		userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
		userQualification: 'Lorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, LoremLorem, Lorem, Lorem, Lorem',
		userGrade: '9'
	}
  ];
  
  let id = props.match.params.job_id;
  const user = people[id];
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} xs={12} md={3} className={classes.back} >
		  <div style={{textAlign:'center'}}>
	  				<img
						src={user.userImage}
						alt={user.userName}
						style={{ width: '150px', height: '150px', borderRadius: '10px', marginTop: '17%'}}
					/>
			</div>
			<div
				className='article-subhead'
				style={{  fontFamily: 'GlacialIndifferenceBold', textAlign:'center' }}
			>
				{user.userName}&nbsp;
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
							<span style={{ fontFamily: 'GlacialIndifferenceBold', fontSize: '25px'}} >{user.userGrade}</span>
			</span>
			</div>
			<div style={{textAlign: 'center', fontFamily: 'GlacialIndifferenceBold'}}>
				<h6>{user.userLocation}</h6>
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
								 <LinkedInIcon />
							</span>
							<span style={{ fontFamily: 'GlacialIndifferenceBold', fontSize: '25px'}} ><a href="#">Linked In</a></span>
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
								 <MailOutlineIcon />
							</span>
							<span style={{ fontFamily: 'GlacialIndifferenceBold', fontSize: '25px'}} ><a href="#">{user.userEmail}</a></span>
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
								 <LinkIcon />
							</span>
							<span style={{ fontFamily: 'GlacialIndifferenceBold', fontSize: '25px'}} ><a href="#">Portfolio</a></span>
			</span>
			</div>
			</div>
	  </Grid>
      <Grid item xs={12} sm={12} md={9} className={classes.back} elevation={6} square>
		<div style={{margin: '7%'}}>
		<p className="article-subhead"><b>Skills</b></p>
		<p className="article-content">{user.userSkills}</p>
		<p className="article-subhead"><b>Experience</b></p>
		<p className="article-content">{user.userExperience}</p>
		<p className="article-subhead"><b>Qualifications</b></p>
		<p className="article-content">{user.userQualification}</p>
		<p className="article-subhead"><b>Passionate About</b></p>
		<p className="article-content">{user.userDesc}</p>
		</div>
      </Grid>
    </Grid>
  );
};

export default JobProfile;


