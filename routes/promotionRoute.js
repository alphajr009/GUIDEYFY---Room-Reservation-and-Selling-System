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

router.get("/getallpromotion", async (req, res) => {

    try {
        const promotions = await Promotion.find({})
        res.send({ promotions })
    } catch (error) {
        return res.status(400).json({ message: error })
    }

});

//Update
router.put("/editpromotion", async (req, res) => {
    try {
        const updatepromotion = new Promotion(req.body)
        await updatepromotion.findOne()

        res.send('Promotion update Successfully');
    } catch (error) {
        return res.status(400).json({ error });
    }
})

//Delete
router.patch('/deletepromotion', async (req, res) => {

    const { _id } = req.body;

    try {

        const promotion = await Promotion.findByIdAndRemove(_id);

        if (!promotion) return res.status(404).send('Promotion not found');
        res.send('Promotion deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(400).send('Error deleting your promotion');
    }

});

module.exports = router