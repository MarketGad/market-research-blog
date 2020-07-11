import React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const Subscribe = () => {
    return (
        <section className="subscribe">
            <form className="signup-form">
                <div className="row">
                    <div className="col s12 l6 container">
                        <h5 style={{ padding: "10px", fontWeight: "500", color: "white" }} className="center">Contact Us </h5>
                        <div className="center">
                            <p className="grey-text">ABC 432, Chandigarh, India</p>
                            <p className="grey-text">helpdesk@marketgad.com</p>
                            <p className="grey-text">+91 9876543210</p>
                        </div>
                    </div>
                    <div className="col s12 l6 container">
                        <h5 style={{ padding: "10px", fontWeight: "500", color: "white" }} className="center">Subscribe Us </h5>
                        <div className="row subscribe-area">
                            <div className="col s9">
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                    />
                                </Grid>
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
