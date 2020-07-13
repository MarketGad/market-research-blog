import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="head-text">
                    <h3 className="center">Welcome!</h3>
                </div>
                <p className="center" style={{ fontSize: '1.35rem', paddingTop: "10px" }}>Gear up the process by discussing your idea with our experts and get ready for a massive lauch...</p><br />
                <div className="row">
                    <div className="col s12 l7 dash">
                        <div style={{ borderRadius: "10px 10px 0 0", padding: "5px" }} className="center black white-text"><b>1</b> <br />
                        </div>
                        <div className="dash-content">
                            <b>
                                The secret of getting ahead is getting started.
                            </b>
                            <br />
                            <br />
                            As a part of your free trial, you will get data-driven evaluation for one of your startup ideas and market analysis from our experts. For
                            privacy protection and non-disclosure of sensitive information you can find a link
                            to our privacy-policy terms on the form. Click the button below to move to the form.
                            <br />
                            <div className="dash-button center">
                                <a href="/form" style={{ background: "#2b2321c9", marginTop: "2em" }} className="btn waves-effect wave-light">Submit idea </a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 l4 dash">
                        <div style={{ borderRadius: "10px 10px 0 0", padding: "5px" }} className="center black white-text"><b>2</b> <br />
                        </div>
                        <div className="dash-content">
                            <b>Dreaming is the first step of Achieveing!</b>
                            <br />
                            <br />
                            Our team will reach out to you soon for a better understanding of your idea and to initiate the market research.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 l4 dash">
                        <div style={{ borderRadius: "10px 10px 0 0", padding: "5px" }} className="center black white-text"><b>4</b> <br />
                        </div>
                        <div className="dash-content">
                            “Motivational quote gute dei de”

                            Customers falling in love with your product? Growth is a synonym for ‘startup’. Let’s raise funding and scale up.

                            <div className="dash-button center">
                                <a href="/form" style={{ background: "#bdaca8", marginTop: "6em", pointerEvents: "none"}} className="btn waves-effect wave-light">Let's Pitch </a>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 l7 dash">
                        <div style={{ borderRadius: "10px 10px 0 0", padding: "5px" }} className="center black white-text"><b>3</b> <br />
                        </div>
                        <div className="dash-content dash-left">
                            Our team will not only help you in data-driven decision making and market analysis but also execute your idea and help in developing
                            a product that your customers actually need.
                            About 59% startup failed due to lack of martket research. We implement an experimentally proven way to achieve Product Market Fit and
                            accelerate your business
                            idea.
                            <div className="dash-button center">
                                <a href="#e" style={{ background: "#bdaca8", marginTop: "4em", pointerEvents: "none" }} className="btn waves-effect wave-light">Let's Execute</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;