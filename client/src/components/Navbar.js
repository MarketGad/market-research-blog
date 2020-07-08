import React from 'react';
import { Divider } from '@material-ui/core';
import logo from './Favicon.jpg';;

const Navbar = () => {
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
                            <li><a href="#a"><i className="material-icons">create</i></a></li>
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