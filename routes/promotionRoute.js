const express = require("express");
const router = express.Router();
const Promotion = require("../models/promotion");

router.post("/addpromotion", async (req, res) => {
    try {
        const newpromotion = new Promotion(req.body)
        await newpromotion.save()

        res.send('New Promotion Added Successfully');
    } catch (error) {
        return res.status(400).json({ error });
    }
})

router.get("/getallpromotion", async (req, res) => {

    try {
        const promotions = await Promotion.find({});
        res.send({ promotions });
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});


module.exports = router