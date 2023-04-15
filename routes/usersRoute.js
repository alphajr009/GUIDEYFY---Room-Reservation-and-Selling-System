const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.post("/register", async (req, res) => {

    const newuser = new User(
        {
            email: req.body.email,
            password: req.body.password,
            fname: req.body.fname,
            lname: req.body.lname,
            birthday:req.body.birthday   

        });

    try {
        const user = await newuser.save();
        return res.send('User Registered Successfully');
    } catch (error) {
        console.log("error in route")
        console.log(newuser)
        return res.status(400).json({ error });
    }

});


router.post("/login", async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email, password: password })
        if (user) {

            const temp = {
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                isUser: user.isUser,
                _id: user._id,
            }
            res.send(temp);
        }
        else {
            return res.status(400).json({ message: 'Login Failed' });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }

});


module.exports = router

