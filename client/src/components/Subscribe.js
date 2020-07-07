import React from "react";

const Subscribe = () => {
    return (
        <section className="subscribe">
            <form className="signup-form">
                <div className="row">
                    <div className="col s12 l6 container">
                        <h5 style={{ padding: "10px", fontWeight: "500" }} className="center">Contact Us </h5>
                        <div className="center">
                            <p className="grey-text">ABC 432, Chandigarh, India</p>
                            <p className="grey-text">helpdesk@marketgad.com</p>
                            <p className="grey-text">+91 9876543210</p>
                        </div>
                    </div>
                    <div className="col s12 l6 container">
                        <h5 style={{ padding: "10px", fontWeight: "500" }} className="center">Subscribe Us </h5>
                        <div className="row subscribe-area">
                            <div className="col s9">
                                <input id="email" className="input-text" type="email" placeholder="Enter your email" />
                            </div>
                            <div className="col s3">
                                <div style={{ marginLeft: "2%" }}>
                                    <button className="signup-button btn waves-effect">Signup</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Subscribe
