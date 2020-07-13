import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:5000/api/subscribe",
            data: { email }
        }).then((response) => {
            console.log(response);
        }).catch((response) => {
            console.log(response);
        })

        // make all the field null
    };
    return (
        <section className="subscribe">
            <form className="signup-form" onSubmit={submitHandler}>
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
                            <div className="col l9 s12">
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                            </div>
                            <div className="col l3 s12">
                                <div style={{ marginLeft: "2%" }}>
                                    <button className="signup-button btn waves-effect">Subscribe</button>
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
