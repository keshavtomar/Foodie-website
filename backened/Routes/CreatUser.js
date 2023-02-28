const express = require('express');
const Router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

var bcrypt = require('bcryptjs');




Router.post('/createuser',
    //body('Validation field','Message to send back if validation fails')
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Password is weak').isLength({ min: 5 })
    , async (req, res) => {

        //errors will store the above two validation result, if validation has errors it returns from here only without doing user.create
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password, salt);

        try {
            await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location
            })
            return res.json({ success: true });
        } catch (error) {
            console.log(error);
            return res.json({ success: false });
        }
    })

Router.post('/loginUser', async (req, res) => {
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData || userData.password !== req.body.password) {
            return res.status(400).json({ success: false, msg: "Email or Password don't match" });
        }
        else {
            return res.json({ success: true });
        }
    } catch (error) {
        console.log(error);
        return res.json({ success: false });
    }
})

module.exports = Router;