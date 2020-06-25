import React from "react";

const Subscribe = () => {
    return (
        <section className="subscribe">
            <h5 className="center">Subscribe</h5>
            <form className="signup-form">
                <div className="row container">
                    <div className="col s3">

                    </div>
                    <div className="col s6">
                        <input id="email" className="input-text" type="email" placeholder="Enter your email" />
                    </div>
                    <div style={{ display: "inline-block", marginLeft: "2%" }}>
                        <button className="signup-button btn waves-effect">Signup</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Subscribe
