import React from "react";

const Slider = () => {
    return (
        <section className="fslider">
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src="https://images.unsplash.com/photo-1574162071085-9b5beb6fdb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=" two" />
                        <div className="caption center-align white-text">
                            <h1>Do you have an idea ?</h1>
                            <h4 className="caption2 blue-text text-lighten-4">Get market research + investor pitch</h4>
                            <a href="/about" style={{ background: "#2b2321c9" }} className="btn waves-effect wave-light">Join us</a>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1592707463561-fb388ffc7c66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=" one" />
                        <div className="caption center-align">
                            <h1>Do you have an idea ?</h1>
                            <h4 className="caption2 blue-text text-lighten-3">Get Market research + Investor pitch</h4>
                            <a href="/about" style={{ background: "#2b2321c9" }} className="btn waves-effect wave-light">Join us</a>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default Slider;
