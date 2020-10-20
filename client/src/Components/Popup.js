import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from './controls/Controls';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
	dialogWrapper: {
		padding: theme.spacing(0),
		position: 'absolute',
		display: 'flex',
		alignSelf: 'center'
	}
}));

export default function Popup (props) {
	const { children, openPopup, setOpenPopup } = props;
	const classes = useStyles();
	return (
		<Dialog
			fullWidth='md'
			open={openPopup}
			onClose={() => setOpenPopup(false)}
			maxWidth='md'
			classes={{ paper: classes.dialogWrapper }}
		>
			<div style={{ textAlign: 'end' }}>
				<Controls.ActionButton
					onClick={() => {
						setOpenPopup(false);
					}}
				>
					<CloseIcon />
				</Controls.ActionButton>
			</div>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
}
