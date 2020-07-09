import React from "react";
import whatwedo from './Whatwedo';

const Slider = () => {
    return (
        <section className="fslider">
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src="https://images.unsplash.com/photo-1574162071085-9b5beb6fdb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=" two" />
                        <div className="caption center-align">
                            <h1 className="caption1">Get free market research and consulting <br /> for your startup idea</h1>
                            <a href="/whatwedo" style={{ background: "#2b2321c9" }} className="btn waves-effect wave-light">Join us</a>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1574162071085-9b5beb6fdb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=" one" />
                        <div className="caption center-align">
                            <h1 className="caption1">We support startups <br /> Get our market research for free</h1>
                            <a href="/whatwedo" style={{ background: "#2b2321c9" }} className="btn waves-effect wave-light">Join us</a>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default Slider;
