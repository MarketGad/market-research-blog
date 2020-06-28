import React from 'react';
import { Divider } from '@material-ui/core';
import logo from './Favicon.jpg';

const Navbar = () => {
    return (
        <section className="fnavbar">
            <div className="nav-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" data-target="mobile-demo" className="brand-logo sidenav-trigger">MarketGad</a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="hide-on-med-and-down">
                            <li><a className="logo" href="/" onclick="toggleModal();"><img style={{ position: "relative" }} src={logo} alt="" /></a></li>
                            <li><a href="/" onclick="toggleModal();">Start-ups</a></li>
                            <li><a href="/" onclick="toggleModal();">Industry</a></li>
                            <li><a href="/" onclick="toggleModal();">Social Entrepreneurship</a></li>
                            <li><a href="/" onclick="toggleModal();">Venture Hacks</a></li>
                            <li className="break"><a href="/" onclick="toggleModal();">Technology</a></li>

                            <li><a href="/" onclick="toggleModal();"><i className="material-icons">search</i></a></li>
                            <li><a href="/" onclick="toggleModal();"><i className="material-icons">create</i></a></li>
                            <li><a href="/" onclick="toggleModal();"><i className="material-icons">account_circle</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/" onclick="toggleModal();">Start-ups</a></li>
                <li><a href="/" onclick="toggleModal();">Industry</a></li>
                <li><a href="/" onclick="toggleModal();">Social Entrepreneurship</a></li>
                <li><a href="/" onclick="toggleModal();">Venture Hacks</a></li>
                <li><a href="/" onclick="toggleModal();">Technology</a></li>
                <Divider />
                <li><a href="/" onclick="toggleModal();">Subscribe</a></li>
                <li><a href="/" onclick="toggleModal();">Search</a></li>
                <li><a href="/" onclick="toggleModal();">Write</a></li>
            </ul>
        </section >
    );
};
export default Navbar;