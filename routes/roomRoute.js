const express = require("express");
const router = express.Router();
const Room = require("../models/room");
const multer = require("multer");
const fs = require("fs");
const Payment = require("../models/payments");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

  router.post("/addproperty", upload.array("images", 5), async (req, res) => {

    console.log("Request body:", req.body);

    const newroom = new Room({
      title: req.body.title,
      type: req.body.category,
      rentperday: req.body.rentperday,
      maxcount: req.body.maxcount,
      phonenumber: req.body.phonenumber,
      description: req.body.description,
      address: JSON.parse(req.body.address),
      services: JSON.parse(req.body.services),
      sellerid: req.body.sellerid,
    });
  
    try {
      const savedRoom = await newroom.save();
  
   
      const updatedFiles = req.files.map((file, index) => {
        const oldPath = file.path;
        const newFilename = `${savedRoom._id}-${index}.jpg`;
        const newPath = `uploads/${newFilename}`;
        fs.renameSync(oldPath, newPath);
        return newPath;
      });
  
   
      const imageUrls = updatedFiles.map((path) => "/uploads/" + path.split("/").pop());
      savedRoom.images = imageUrls;
      await savedRoom.save();

      try {
        const payment = await Payment.findOne({ sellerid: req.body.sellerid });
        if (payment) {
          payment.fees += 500;
          await payment.save();
        } else {
          console.log("Payment not found for the given sellerid:", req.body.sellerid);
        }
      } catch (paymentError) {
        console.log("Error in updating payment fees:", paymentError);
      }
  
      return res.send("Room Created Successfully");
    } catch (error) {
      console.log("error in route");
      console.log(newroom);
      return res.status(400).json({ error });
    }
  });
  



router.get("/getallrooms", async(req,res)=>{

    try {
        const rooms = await Room.find({})
        return res.json({rooms})
    } catch (error) {
        return res.status(400).json({message: error})
    }


});



router.patch('/deleteroom', async (req, res) => {

    const { _id } = req.body;

    try {

        const room = await Room.findByIdAndRemove(_id);

        if (!room) return res.status(404).send('Room not found');

        for (let index = 0; index < 5; index++) {
          const imagePath = `uploads/${room._id}-${index}.jpg`;
          if (fs.existsSync(imagePath)) {
              fs.unlinkSync(imagePath);
          }
      }
        res.send('Room deleted successfully');

    } catch (error) {
        console.log(error);
        res.status(400).send('Error deleting Room');
    }

});



router.post("/getroombysellerid", async (req, res) => {

    const seller = req.body.sellerid

    try {
        const room = await Room.find({sellerid:seller})
        return res.json({room})
    } catch (error) {
        return res.status(400).json({message: error})
    }
});


router.post("/getroombyid", async(req,res)=>{


    const roomid = req.body.roomid

    try {
        const room = await Room.findOne({_id:roomid})
        return res.json({room})
    } catch (error) {
        return res.status(400).json({message: error})
    }


});




module.exports =router