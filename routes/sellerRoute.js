const express = require("express");
const router = express.Router();
const Seller = require("../models/seller");

router.post("/sregister", async (req, res) => {

    const newuser = new Seller(
        {
            email: req.body.email,
            password: req.body.password,
            fname: req.body.fname,
            lname: req.body.lname,
            stripename:req.body.stripename,
            stripeemail: req.body.stripeemail,
            phonenumber: req.body.phonenumber,


        });

    try {
        const user = await newuser.save();
        return res.send('Seller Registered Successfully');
    } catch (error) {
        console.log("error in route")
        console.log(newuser)
        return res.status(400).json({ error });
    }

});




module.exports = router
