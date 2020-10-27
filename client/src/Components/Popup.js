import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from './controls/Controls';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
	dialogWrapper: {
		padding: theme.spacing(0),
		display: 'flex',
		alignSelf: 'center'
	}
}));

export default function Popup (props) {
	const { children, openPopup, setOpenPopup, noClose } = props;
	const classes = useStyles();
	return (
		<Dialog
			fullWidth='md'
			open={openPopup}
			onClose={() => setOpenPopup(false)}
			maxWidth='md'
			classes={{ paper: classes.dialogWrapper }}
		>
			{!noClose && (
				<div style={{ textAlign: 'end' }}>
					<Controls.ActionButton
						onClick={() => {
							setOpenPopup(false);
						}}
					>
						<CloseIcon />
					</Controls.ActionButton>
				</div>
			)}

			<DialogContent style={{ padding: '0' }}>{children}</DialogContent>
		</Dialog>
	);
}
