import React from 'react';

const Footer = () => {
    return (
        <section className="ffooter">
            <footer className="footer-one">

                <div className="footer-two">
                    <i class="material-icons copyright">copyright</i> <a href="/" style={{ letterSpacing: "0.5px" }} className=" grey-text text-lighten-4"> 2020 MarketGad. All rights reserved.</a>
                    <div className="right">
                        <img className="li" alt="li" src="https://img.icons8.com/color/100/000000/linkedin.png" />
                        <img className="twi" alt="tw" src="https://img.icons8.com/fluent/100/000000/twitter.png" />
                        <img className="fb" alt="lo" src="https://img.icons8.com/fluent/48/000000/facebook-new.png" />
                    </div>
                </div>
            </footer>
        </section>
    );
};
export default Footer;