import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="head-text">
                    <h3 className="center">Welcome!</h3>
                </div>
                <div className="center">
                    Gear up the process by discussing your idea with our experts and get ready for a massive lauch...<br />
                </div>
                <div className="row">
                    <div className="col s12 l7 dash dash-col">
                        <div className="dash-content">
                            <b>
                                The secret of getting ahead is getting started.
                            </b>
                            <br />
                            As a part of your free trial, you will get data-driven evaluation for one of your startup ideas and market analysis from our experts. For
                            privacy protection and non-disclosure of sensitive information you can find a link
                            to our privacy-policy terms on the form. Click the button below to move to the form.
                            <br />
                        </div>
                        <div className="dash-button center">
                            <a href="/form" style={{ background: "#2b2321c9", marginTop: "20px" }} className="btn waves-effect wave-light">Submit idea </a>
                        </div>
                    </div>
                    <div className="col s12 l4 dash dash-col">
                        <div className="dash-content">
                            <br />
                            <b>Dreaming is the first step of Achieveing!</b>
                            <br />
                            Our team will reach out to you soon for a better understanding of your idea and to initiate the market research.
                        </div>
                        {/* <div className="dash-button center">
                            <a href="/form" style={{ background: "#2b2321c9", marginTop: "20px" }} className="btn waves-effect wave-light">Submit idea to get help </a>
                        </div> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 dash dash-col">
                        <div className="dash-content">
                            “Motivational quote gute dei de”

                            Customers falling in love with your product? Growth is a synonym for ‘startup’. Let’s raise funding and scale up.


                    </div>
                        <div className="dash-button center">
                            <a href="/form" style={{ background: "#2b2321c9", marginTop: "20px" }} className="btn waves-effect wave-light">Let's Pitch </a>
                        </div>
                    </div>
                    <div className="col s12 l7 dash dash-col">
                        <div className="dash-content dash-left">
                            Our team will not only help you in data-driven decision making and market analysis but also execute your idea and help in developing
                            a product that your customers actually need.
                            About 59% startup failed due to lack of martket research. We implement an experimentally proven way to achieve Product Market Fit and
                            accelerate your business
                            idea.
                        </div>
                        <div className="dash-button center">
                            <a href="#e" style={{ background: "#2b2321c9", marginTop: "20px" }} className="btn waves-effect wave-light">Let's Execute</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;