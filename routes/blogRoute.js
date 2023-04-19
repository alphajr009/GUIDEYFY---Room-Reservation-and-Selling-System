const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");


router.post("/getblogsbysellerid", async(req,res)=>{

    const seller = req.body.sellerid

    try {
        const blogs = await Blog.find({sellerid:seller})
        return res.json({blogs})
    } catch (error) {
        return res.status(400).json({message: error})
    }


});


router.post("/addblogs", async (req, res) => {

    try {
        const newblog = new Blog(req.body)
        await newblog.save()
        res.send('New Blog Added successfully');
   
    } catch (error) {
        return res.status(400).json({ error })
       

    }
});

module.exports = router



