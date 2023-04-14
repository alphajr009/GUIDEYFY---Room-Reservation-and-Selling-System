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


module.exports = router



