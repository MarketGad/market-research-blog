import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer-one">
                <div className="footer-two">
                    <i class="material-icons copyright">copyright</i> <a href="/privacy" style={{ letterSpacing: "0.5px" }} className="footer-text grey-text text-lighten-4"> 2020 MarketGad. All rights reserved.</a>
                    <div className="right">
                        <a href="#f"><img className="social" alt="li" src="https://img.icons8.com/color/100/000000/linkedin.png" /></a>
                        <a href="#t"> <img className="social" alt="tw" src="https://img.icons8.com/fluent/100/000000/twitter.png" /></a>
                        <a href="#l"> <img className="social" alt="lo" src="https://img.icons8.com/fluent/48/000000/facebook-new.png" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;