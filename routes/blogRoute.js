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




router.post("/addblog", async (req, res) => {

    const newblog = new Blog({
        title: req.body.title,
        description: req.body.description,
        imageurls: req.body.imageurls,
    });
    
    try {
        const blog = await newblog.save();
        return res.send('Blog Created Successfully');
    } catch (error) {
        console.log("error in route")
        console.log(newblog)
        return res.status(400).json({ error });
    }
    

});






module.exports = router



