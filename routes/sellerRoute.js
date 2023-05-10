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

router.patch('/changepassword', async (req, res) => {

    const { _id, currentPassword, newPassword } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).send('User not found');

        if (user.password !== currentPassword) {
            return res.status(400).send('Current password does not match');
        }

        user.password = newPassword;
        await user.save();
        res.send('Password updated successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating password');
    }

});

router.patch('/deleteseller', async (req, res) => {

    const { _id } = req.body;

    try {

        const user = await Seller.findByIdAndRemove(_id);

        if (!user) return res.status(404).send('User not found');
        res.send('User deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(400).send('Error deleting User');
    }

});

router.patch("/editusername", async (req, res) => {
    const { _id, fname, lname } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        if (fname) user.fname = fname;
        if (lname) user.lname = lname;

        await user.save();
        return res.json({ message: 'User details updated successfully' });
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.patch("/edituseremail", async (req, res) => {
    const { _id,email } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (email) user.email = email;
        

        await user.save();
        return res.json({ message: 'User email details updated successfully' });
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.patch("/edituserdisplayname", async (req, res) => {
    const { _id, displayName } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (displayName) user.displayName = displayName; 

        await user.save();
        return res.json({ message: 'User display name updated successfully' });
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.patch("/editbirthday", async (req, res) => {
    const { _id, birthday } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (birthday) user.birthday = birthday; 

        await user.save();
        return res.json({ message: 'User display name updated successfully' });
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.patch("/editaddress", async (req, res) => {
    const { _id, address } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (address) user.address =address ; 

        await user.save();
        return res.json({ message: 'User display name updated successfully' });
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.patch("/editnationality", async (req, res) => {
    const { _id,nationality } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (nationality) user.nationality =nationality; 

        await user.save();
        return res.json({ message: 'User display name updated successfully' });
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.patch("/editngender", async (req, res) => {
    const { _id,gender } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (gender) user.gender =gender; 

        await user.save();
        return res.json({ message: 'User display name updated successfully' });
    } catch (error) {
        return res.status(400).json({ error });
    }
});


router.patch('/changepassword', async (req, res) => {

    const { _id, currentPassword, newPassword } = req.body;

    try {
        const user = await Seller.findById(_id);
        if (!user) return res.status(404).send('User not found');

        if (user.password !== currentPassword) {
            return res.status(400).send('Current password does not match');
        }

        user.password = newPassword;
        await user.save();
        res.send('Password updated successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating password');
    }

});




module.exports = router
