const express = require("express");


const app =express();

const dbconfig = require('./db')
const roomsRoute = require('./routes/roomRoute')
const userRoute = require('./routes/usersRoute')
const sellerRoute = require('./routes/sellerRoute')
const blogRoute = require('./routes/blogRoute')

app.use(express.json())

app.use('/api/rooms', roomsRoute)
app.use('/api/users', userRoute)
app.use('/api/sellers',sellerRoute )
app.use('/api/blogs',blogRoute )

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Node Server Started using Nodemon!'));