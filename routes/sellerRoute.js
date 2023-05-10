const express = require("express");
const router = express.Router();
const Seller = require("../models/seller");
const Payment = require("../models/payments");

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
        const saveduser = await newuser.save();

        const newPayment = new Payment({
            fees: "0", 
            funds: "0",
            sellerid: saveduser._id
        });

        await newPayment.save();


        return res.send('Seller Registered Successfully');
    } catch (error) {
        console.log("error in route")
        console.log(newuser)
        return res.status(400).json({ error });
    }

});

router.post("/slogin", async (req, res) => {

    const { lemail, lpassword } = req.body

    try {
        const user = await Seller.findOne({ email: lemail, password: lpassword })
        if (user) {

            const temp = {
                fname: user.fname,
                lname: user.lname,
                email: user.email,
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


router.post("/getsellerbyid", async (req, res) => {

    const userid = req.body.userid

    try {
        const user = await Seller.find({ _id: userid })
        res.send(user)

    } catch (error) {
        return res.status(400).json({ error })

    }
});

router.get("/getallsellers", async (req, res) => {

    try {
        const users = await Seller.find({})
        res.send({ users });
    } catch (error) {
        return res.status(400).json({ error });
    }

});

router.patch('/changesuspend', async (req, res) => {

    const { _id, isSuspend } = req.body;

    try {

        const user = await Seller.findById(_id);
        user.isSuspend = true;
        await user.save();
        res.send('Seller suspend successfully');
    } catch (error) {
        console.log(error);
        res.status(400).send('seller suspend successfully');
    }

});

router.patch('/changeasseller', async (req, res) => {

    const { _id, isSuspend } = req.body;

    try {

        const user = await Seller.findById(_id);
        user.isSuspend = false;
        await user.save();
        res.send('Seller suspend successfully');
    } catch (error) {
        console.log(error);
        res.status(400).send('seller suspend successfully');
    }

});


router.patch("/editseller", async (req, res) => {
    const { _id,stripename,stripeemail } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).json({ message: 'Seller not found' });

        if (stripename) user. stripename =  stripename;
        if (stripeemail) user.stripeemail = stripeemail;

        await user.save();
        return res.json({ message: 'Seller details updated successfully' });
    } catch (error) {
        return res.status(400).json({ error });
    }
});



module.exports = router
