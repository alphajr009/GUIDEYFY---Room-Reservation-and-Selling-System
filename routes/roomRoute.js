const express = require("express");
const router = express.Router();
const Room = require("../models/room");

router.get("/getallrooms", async(req,res)=>{

    try {
        const rooms = await Room.find({})
        return res.json({rooms})
    } catch (error) {
        return res.status(400).json({message: error})
    }


});
module.exports = router


router.patch('/deleteroom', async (req, res) => {

    const { _id } = req.body;

    try {

        const room = await Room.findByIdAndRemove(_id);

        if (!room) return res.status(404).send('Room not found');
        res.send('Room deleted successfully');

    } catch (error) {
        console.log(error);
        res.status(400).send('Error deleting Room');
    }

});

