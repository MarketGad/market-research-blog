import React from 'react';
import Footer2 from '../Components/Footer';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		color: '#080808d9',
		backgroundColor: 'transparent'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
    },
    userdisp: {
        marginTop: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column'
    }
}));

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const Products = () => {
    const classes = useStyles();
    const [ open, setOpen ] = React.useState(false);
    const [ Useropen, setUser ] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
    };

    const handleClickUser = () => {
		setUser(true);
	};

	const handleCloseUser = () => {
		setUser(false);
    };
    
    const people = [
        {
            userName: 'Anonymous User',
            userImage: 'https://lorempixel.com/100/190/nature/6',
            userSkills: 'Lorem, Lorem, Lorem, Lorem',
            userEmail: 'abc@gmail.com',
            userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
            userLocation: 'Mumbai, Maharashtra, India',
            userExperience: "2+ years of experience in lore, lorem, lorem, lorem. 1+ years of exeperience in so and so",
            userGrade: '3'
        },
        {
            userName: 'Anonymous User',
            userImage: 'https://lorempixel.com/100/190/nature/6',
            userSkills: 'Lorem, Lorem, Lorem, Lorem',
            userEmail: 'abc@gmail.com',
            userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
            userLocation: 'Mumbai, Maharashtra, India',
            userExperience: '2+ years of experience in lore, lorem, lorem, lorem',
            userGrade: '3'
        },
        {
            userName: 'Anonymous User',
            userImage: 'https://lorempixel.com/100/190/nature/6',
            userSkills: 'Lorem, Lorem, Lorem, Lorem',
            userEmail: 'abc@gmail.com',
            userDesc: 'I am skilled in lorem,lore,lorem,lorem',
            userLocation: 'Mumbai, Maharashtra, India',
            userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
            userGrade: '3'
        },
        {
            userName: 'Anonymous User',
            userImage: 'https://lorempixel.com/100/190/nature/6',
            userSkills: 'Lorem, Lorem, Lorem, Lorem',
            userEmail: 'abc@gmail.com',
            userDesc: 'I am skilled in lorem,lore,lorem,lorem....',
            userLocation: 'Mumbai, Maharashtra, India',
            userExperience: '2+ years of experience in lore, lorem, lorem, lorem ',
            userGrade: '3'
        },
    ]

    const showPeople = people.length ? (
        people.map((user) =>  {
            return (
                    <div>
                        <ul class="collection">
                            <li class="collection-item avatar">
                            <img src={user.userImage} alt="" class="circle"/>
                            <a class="title" onClick={handleClickUser}><b>{user.userName}</b></a>
                            <p><b>Skills: </b>{user.userSkills}<br/>
                            <b>Email: </b>{user.userEmail}<br/>
                            </p>
                            <a href="#!" class="secondary-content"><i class="material-icons">grade grade grade</i></a>
                            </li>
                            <div style={{'padding': '2%'}}>
                            <a class="waves-effect waves-light btn hire-btn1">Hire</a>
                            <a class="waves-effect waves-light btn hire-btn1" style={{'float': 'right'}} onClick={handleClickUser}>Connect</a>
                            <div>
                                    <Dialog
                                        open={Useropen}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleCloseUser}
                                        aria-labelledby='alert-dialog-slide-title'
                                        aria-describedby='alert-dialog-slide-description'
                                    >
                                        <div>
                                            <Container component='main' maxWidth='xs' style={{'backgroundColor':'white', 'color':'black'}}>
                                                <CssBaseline />
                                                <div className={classes.userdisp} style={{'paddingTop': '2%', 'paddingBottom':'2%'}}>
                                                    <img src={user.userImage} alt={user.userName} className="userimg"></img>
                                                    <div className="article-subhead" style={{'color':'#0153a5'}}>{user.userName}</div>
                                                    <div className="article-content"><b>Expertise Skills :</b><br/> {user.userSkills}</div><br/>
                                                    <div className="article-content"><b>Description :</b><br/> {user.userDesc}</div><br/>
                                                    <div className="article-content"><b>Location :</b><br/> {user.userLocation}</div><br/>
                                                    <div className="article-content"><b>Experiences :</b><br/> {user.userExperience}</div><br/>
                                                    <div className="article-content"><b>Contact At :</b><br/> {user.userEmail}</div><br/>
                                                    <a href="#!" class="secondary-content"><i class="material-icons">grade grade grade</i></a>
                                                </div>
                                            </Container>
                                        </div>
                                    </Dialog>
				            </div>
                            </div>
                        </ul>
                    </div>
                        
            );
        })
    ) : (
        <div className='center'> No People to show: ( </div>
    );
    return(
            <div>
                <div className="container">
                    <div className='row'>
                        <div className="col s12 l8">
                           
                        </div>
                        <div className="col s12 l4">
                            <h4 className="center" style={{fontFamily:"GlacialIndifferenceBold"}}>List Of People</h4>
                                <a class="waves-effect waves-light btn-small hire-btn1" style={{'backgroundColor':'#0153a5' , 'color':'white'}}>Skill Wise Filter</a>
                                <a class="waves-effect waves-light btn-small hire-btn1" style={{'backgroundColor':'#0153a5' , 'color':'white', 'float': 'right'}} onClick={handleClickOpen}>Register</a>
                                    {showPeople}
                            </div>
                            <div>
                            <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-labelledby='alert-dialog-slide-title'
                                aria-describedby='alert-dialog-slide-description'
                            >
                                <div>
				<Container component='main' maxWidth='xs'>
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<PersonAddIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Register Yourself
						</Typography>
						<form className={classes.form} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='fname'
										name='firstName'
										variant='outlined'
										required
										fullWidth
										id='firstName'
										label='First Name'
										autoFocus
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='lastName'
										label='Last Name'
										name='lastName'
										autoComplete='lname'
									/>
								</Grid>
                                <Grid item xs={12} sm={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='email'
										label='Email'
										name='email'
										autoComplete='email'
									/>
								</Grid>
                                <Grid item xs={12} sm={12} className="center">
									<TextField
										variant='outlined'
										required
										fullWidth
										id='skills'
										label='Skills'
										name='lastName'
										autoComplete='skills'
									/>
								</Grid>
                                <Grid item xs={12} sm={12} className="center">
									<TextField
										variant='outlined'
										required
										fullWidth
										id='desc'
										label='Description'
										name='desc'
										autoComplete='description'
									/>
								</Grid>
                                <Grid item xs={12} sm={12} className="center">
									<TextField
										variant='outlined'
										required
										fullWidth
										id='experience'
										label='Experience'
										name='experience'
										autoComplete='experience'
									/>
								</Grid>
                                <Grid item xs={12} sm={12} className="center">
									<TextField
										variant='outlined'
										required
										fullWidth
										id='location'
										label='Location'
										name='location'
										autoComplete='location'
									/>
								</Grid>
                                <Grid item xs={12} sm={12} className="center">
                                <TextField
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='profilepic'
                                    label='Link Of Profile Picture'
                                    name='profilepic'
                                    autoComplete='profilepic'
							    />
							    </Grid>
							</Grid>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}
							>
								Register
							</Button>
						</form>
					</div>
				</Container>
			</div>
                            </Dialog>
				</div>
                    </div>
                </div>
                </div>
    );
};

export default Products;