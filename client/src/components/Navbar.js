import React from 'react';
import { Divider } from '@material-ui/core';
import logo from './Favicon.jpg';

const Navbar = () => {
    return (
        <section className="fnavbar">
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" data-target="mobile-demo" className="brand-logo sidenav-trigger">MarketGad</a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" id="comp-menu" className="hide-on-med-and-down">
                            <li><a className="logo" href="/" onclick="toggleModal();"><img style={{ position: "relative" }} src={logo} alt="" /></a></li>
                            <li><a href="/startup" onclick="toggleModal();">Start-ups</a></li>
                            <li><a href="/venture" onclick="toggleModal();">Industry</a></li>
                            <li><a href="/social" onclick="toggleModal();">Social Entrepreneurship</a></li>
                            <li><a href="/venture" onclick="toggleModal();">Venture Hacks</a></li>
                            <li className="break"><a href="/tech" onclick="toggleModal();">Technology</a></li>
                            <li><a href="/" onclick="toggleModal();"><i className="material-icons">create</i></a></li>
                            <li><a href="/" onclick="toggleModal();"><i className="material-icons">account_circle</i></a></li>
                        </ul>
                        <ul>
                            <a href="#" className="search" id="search-icon"><i className="material-icons">search</i></a>
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

                <li><a href="/startup" onclick="toggleModal();">Start-ups</a></li>
                <li><a href="/industry" onclick="toggleModal();">Industry</a></li>
                <li><a href="/social" onclick="toggleModal();">Social Entrepreneurship</a></li>
                <li><a href="/venture" onclick="toggleModal();">Venture Hacks</a></li>
                <li><a href="/tech" onclick="toggleModal();">Technology</a></li>
                <Divider />
                <li><a href="/" onclick="toggleModal();">Subscribe</a></li>
                <li><a href="/" onclick="toggleModal();">Write</a></li>
            </ul>
        </section >
    );
};
export default Navbar;