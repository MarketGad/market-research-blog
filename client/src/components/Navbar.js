import React from 'react';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import logo from './Favicon.jpg';
import Slide from '@material-ui/core/Slide';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

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
            data: {tokenId: response.tokenId}
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
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" data-target="mobile-demo" className="brand-logo sidenav-trigger">MarketGad</a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" id="comp-menu" className="hide-on-med-and-down">
                            <li><a className="logo" href="/"><img style={{ position: "relative" }} src={logo} alt="" /></a></li>
                            <li><a href="/venture">Industry</a></li>
                            <li><a href="/startup">Start-ups</a></li>
                            <li><a href="/venture">Venture Hacks</a></li>
                            <li className="break"><a href="/about">About us</a></li>
                            {/* <li><a href="#a"><i className="material-icons">create</i></a></li> */}
                            <li>
                            <div className="center">
                                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                    Login Here
                                    </Button>
                            </div>
                            <div>
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
                                            <Button onClick={handleClose} variant="contained" color="primary" href="/">
                                                <GoogleLogin
                                                    clientId="798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com"
                                                    onSuccess={responseSuccessGoogle}
                                                    onFailure={responseErrorGoogle}
                                                    cookiePolicy={'single_host_origin'}
                                                />
                                            </Button>
                                        </DialogActions>
                                    </div>
                                </Dialog>
                            </div>
                            </li>
                            <li style={{ marginRight: "15px" }}><a href="/" ><i className="material-icons">account_circle</i></a></li>
                        </ul>
                        <ul>
                            <a href="#a" className="search" id="search-icon"><i className="material-icons">search</i></a>
                        </ul>
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
                <li><a href="/social">Social Entrepreneurship</a></li>
                <li><a href="/venture" >Venture Hacks</a></li>
                <li><a href="/tech" >Technology</a></li>
                <Divider />
                <li><a href="/" >Subscribe</a></li>
                <li><a href="#a">Write</a></li>
            </ul>
        </div>
    );
};
export default Navbar;