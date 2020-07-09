const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const config = require('../config');

const client = new OAuth2Client("798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com");


router.post('/googlelogin', async (req, res) => {
    const { tokenId } = req.body;
    client.verifyIdToken({ idToken: tokenId, audience: "798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com" })
        .then((response) => {
            const { email_verified, name, email, picture } = response.payload;
            console.log(response.payload);
            if (email_verified) {
                User.findOne({ email }).exec((err, user) => {
                    if (err) {
                        return res.status(400).json({
                            error: "Somethig went wrong..."
                        })
                    } else {
                        if (user) {
                            const token = jwt.sign({ _id: user.id }, config.JWT_SIGNIN_KEY, { expiresIn: '7d' });
                            const { _id, name, email, picture, ideagiven, idea, friend1, friend2, friend3 } = user;
                            res.json({
                                token,
                                user: { _id, name, email, picture, ideagiven, idea, friend1, friend2, friend3 }
                            })
                        } else {
                            let newUser = new User({
                                name,
                                email,
                                picture,
                            });
                            newUser.save((err, data) => {
                                if (err) {
                                    return res.status(400).json({
                                        error: "Something went wong..."
                                    })
                                }
                                const token = jwt.sign({ _id: data.id }, config.JWT_SIGNIN_KEY, { expiresIn: '7d' });
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