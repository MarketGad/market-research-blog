import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Aboutus = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container">
            <div className="conatainer">
                <h1 className="center">About Us</h1>
            </div>
            <div className="flow-text">
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500slley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release ofs of Lorem Ipsum.
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                layout. (injected humour and the like).
                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                from 45 BC, College in Virginia,
                written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                amet..", comes from a line in section 1.10.32.
                The stre also reproduced in their exact original form, accompanied
                by English versions from the 1914 translation by H. Rackham.

            </div>
            <div>
                <div className="center">
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        Login Here
                        </Button>
                </div>
                <div className="center">
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <div className="center" style={{ padding: "15px", fontSize: "20px" }}>
                            <DialogTitle id="alert-dialog-slide-title">Login to Get the 1-month Free Subscription</DialogTitle>
                        </div>
                        <div className="center" style={{ padding: "15px" }}>
                            <DialogActions>
                                <Button onClick={handleClose} variant="contained" color="primary" href="/dashboard">
                                    LinkedIn Login
                                </Button>
                                <Button onClick={handleClose} variant="contained" color="primary" href="/dashboard">
                                    Google Login
                                 </Button>
                            </DialogActions>
                        </div>
                    </Dialog>
                </div>
            </div>
        </div >
    );
};

export default Aboutus;


