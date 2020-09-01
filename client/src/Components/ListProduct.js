import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(1),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		color: '#080808d9',
		backgroundColor: 'transparent'
	},
	form: {
		width: '95%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(1, 0, 1, 0)
	},
	userdisp: {
		marginTop: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column'
	},
	userimg: {
		borderRadius: '10px',
		height: '10rem',
		width: '10rem',
		marginLeft: '30%'
	}
}));

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const ListProduct = () => {
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

	return (
		<div>
                        <a
							className='waves-effect waves-light btn-small pro-btn1'
							style={{ backgroundColor: '#0153a5', color: 'white' }}
						>
							Deals
						</a>
                        <a
							className='waves-effect waves-light btn-small pro-btn1'
							style={{ backgroundColor: '#0153a5', color: 'white', 'float':'right' }}
							href='/registerforproduct'
						>
							List your Product
						</a>
				</div>
		
	);
};
export default ListProduct;
