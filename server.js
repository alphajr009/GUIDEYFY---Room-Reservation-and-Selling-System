const express = require("express");
const cors = require('cors');


const app = express();


const dbconfig = require('./db')
const roomsRoute = require('./routes/roomRoute')
const userRoute = require('./routes/usersRoute')
const sellerRoute = require('./routes/sellerRoute')
const blogRoute = require('./routes/blogRoute')
const paymentRoute = require('./routes/paymentRoute')


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/uploads", express.static("uploads"));




app.use(express.json())

app.use('/api/rooms', roomsRoute)
app.use('/api/users', userRoute)
app.use('/api/sellers', sellerRoute)
app.use('/api/blogs', blogRoute)
app.use('/api/payments', paymentRoute)



const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Node Server Started using Nodemon!'));