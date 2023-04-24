const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});



const upload = multer({ storage });

router.post("/addblog", upload.array("images", 4), async (req, res) => {

  const newblog = new Blog({
    title: req.body.title,
    description: req.body.description,
    roomid: req.body.room_id,
    category: req.body.category,
  });

  try {
    const savedBlog = await newblog.save();

 
    const updatedFiles = req.files.map((file, index) => {
      const oldPath = file.path;
      const newFilename = `${savedBlog._id}-${index}.jpg`;
      const newPath = `uploads/${newFilename}`;
      fs.renameSync(oldPath, newPath);
      return newPath;
    });

 
    const imageUrls = updatedFiles.map((path) => "/uploads/" + path.split("/").pop());
    savedBlog.images = imageUrls;
    await savedBlog.save();

    return res.send("Blog Created Successfully");
  } catch (error) {
    console.log("error in route");
    console.log(newblog);
    return res.status(400).json({ error });
  }
});



router.post("/getblogsbysellerid", async(req,res)=>{

    const seller = req.body.sellerid

    try {
        const blogs = await Blog.findOne({sellerid:seller})
        return res.json({blogs})
    } catch (error) {
        return res.status(400).json({message: error})
    }


});


router.get("/getallblogs", async(req,res)=>{

  try {
      const blogs = await Blog.find({})
      return res.json({blogs})
  } catch (error) {
      return res.status(400).json({message: error})
  }


});





module.exports = router



