import React from "react";

const Slider = () => {
    return (
        <section className="fslider">
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src="https://images.unsplash.com/photo-1574162071085-9b5beb6fdb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=" two" />
                        <div className="caption slide-box center-align">
                            <h1 className="caption1 hide-on-med-and-down">Get free market research and consulting</h1>
                            <h2 className="caption1 hide-on-med-and-down">for your startup idea</h2>
                            <h1 className="caption2 show-on-medium-and-down">Get free market research and consulting for your startup idea </h1>
                            <a href="/whatwedo" style={{ background: "#2b2321c9", marginTop: "1.5em" }} className="btn waves-effect waves-light join-btn">Join us</a>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1574162071085-9b5beb6fdb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=" one" />
                        <div className="caption slide-box center-align">
                            <h1 className="caption1 hide-on-med-and-down">We support startups</h1>
                            <h2 className="caption1 hide-on-med-and-down">Get our market research for free</h2>
                            <h1 className="caption2 show-on-medium-and-down">We support startups. <br /> Get our market research for free</h1>
                            <a href="/whatwedo" style={{ background: "#2b2321c9", marginTop: "1.5em" }} className="btn waves-effect waves-light join-btn">Join us</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Slider;
