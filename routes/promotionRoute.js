const express = require("express");
const router = express.Router();
const Promotion = require("../models/promotion");


//Create
router.post("/addpromotion", async (req, res) => {
    try {
        const newpromotion = new Promotion(req.body)
        await  newpromotion .save()
        res.send('New room Added successfully');
   
    } catch (error) {
        return res.status(400).json({ error })

    }

});



module.exports = router
