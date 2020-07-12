import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import logo from './Favicon.jpg';
import Slide from '@material-ui/core/Slide';
import GoogleLogin from 'react-google-login';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const responseSuccessGoogle = (response) => {
        console.log(response);
        axios({
            method: "POST",
            url: "http://localhost:5000/api/googlelogin",
            data: { tokenId: response.tokenId }
        }).then((response) => {
            console.log("Google login success ", response);
        });
    }

    const responseErrorGoogle = (response) => {
        console.log(response);
    }

    return (
        <div>
            <div className="navbar-fixed">
                <nav className="nav-center" role="navigation">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo logo sidenav-trigger"><img height="55px" width="60px" style={{ position: "relative" }} src={logo} alt="logo-mob" /></a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <a href="#a" className="login-mob right sidenav-trigger" onClick={handleClickOpen}><i className="material-icons">person_add_alt_1</i></a>
                        <ul id="nav-mobile" id="comp-menu" style={{ backgroundColor: "black" }} className="hide-on-med-and-down">
                            <li><a className="logo" href="/"><img style={{ position: "relative" }} src={logo} alt="logo" /></a></li>
                            <li><a href="/industry">Industry</a></li>
                            <li><a href="/startup">Start-ups</a></li>
                            <li><a href="/venturehack">Venture Hacks</a></li>
                            <li className="break"><a href="/about">About us</a></li>
                            <li ><a onClick={handleClickOpen}>Login</a></li>
                            <li style={{ marginRight: "15px" }}><a href="/dashboard" ><i className="material-icons">account_circle</i></a></li>
                        </ul>
                        {/* <ul>
                            <a href="#a" className="search" id="search-icon"><i className="material-icons">search</i></a>
                        </ul> */}
                        <div>
                            <form>
                                <div className="input-field" style={{ display: "none" }} id="search-div">
                                    <input id="search-txt" type="search" />
                                    <label className="label-icon" for="search-txt"><i className="material-icons">search</i></label>
                                    <i className="material-icons" id="close-icon">close</i>
                                </div>
                            </form>
                        </div>

                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <nav>
                    <div class="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" placeholder="Search here..." />
                                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                <li><a href="/startup">Start-ups</a></li>
                <li><a href="/industry">Industry</a></li>
                <li><a href="/venturehack" >Venture Hacks</a></li>
                <li><a href="/dashboard" >Dashboard</a></li>
                <li><a href="/about" >About Us</a></li>
            </ul>
            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <div className="center" style={{ padding: "10px", fontSize: "20px" }}>
                        <DialogTitle id="alert-dialog-slide-title">Login to Get the 1-month Free Subscription</DialogTitle>
                    </div>
                    <div className="center" style={{ padding: "10px" }}>
                        <DialogActions>
                            {/* <Button onClick={handleClose} variant="contained" color="primary" href="/dashboard">
                                LinkedIn Login
                                            </Button> */}
                            <Button onClick={handleClose} href="/">
                                <GoogleLogin
                                    clientId="798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com"
                                    onSuccess={responseSuccessGoogle}
                                    onFailure={responseErrorGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    redirectUri={'/dashboard'}
                                />
                            </Button>
                        </DialogActions>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};
export default Navbar;