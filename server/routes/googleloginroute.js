const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const config = require('../config');

const client = new OAuth2Client("798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com");


router.post('/googlelogin', async (req, res, next) => {
    const { tokenId } = req.body;
    client.verifyIdToken({ idToken: tokenId, audience: "798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com" })
        .then((response) => {
            const { email_verified, name, email, picture } = response.payload;
            console.log(response.payload);
            if (email_verified) {
                console.log("1");
                User.findOne({ email }).exec((err, user) => {
                    if (err) {
                        return res.status(400).json({
                            error: "Somethig went wrong..."
                        })
                    } else {
                        console.log("2");
                        if (user) {
                            console.log("3");
                            const token = jwt.sign({ _id: user._id }, config.JWT_SIGNIN_KEY, { expiresIn: '7d' });
                            const { _id, name, email, picture, ideagiven, idea, friend1, friend2, friend3 } = user;
                            res.json({
                                token,
                                user: { _id, name, email, picture, ideagiven, idea, friend1, friend2, friend3 }
                            })
                        } else {
                            console.log("4");
                            const newUser = new User({
                                name,
                                email,
                                picture,
                            });
                            newUser.save((err, data) => {
                                console.log(data);
                                if (err) {
                                    console.log("5");
                                    res.status(401).json({
                                        error: "Something went wong..."
                                    })
                                }
                                const token = jwt.sign({ _id: data._id }, config.JWT_SIGNIN_KEY, { expiresIn: '7d' });
                                const { _id, name, email, picture, ideagiven, idea, friend1, friend2, friend3 } = newUser;
                                res.json({
                                    token,
                                    user: { _id, name, email, picture, ideagiven, idea, friend1, friend2, friend3 }
                                })
                            });

                        }
                    }
                });
            }
        });
});

module.exports = router;