const express = require("express");
const cors = require('cors');
const path = require("path");



const app = express();


const dbconfig = require('./db')
const roomsRoute = require('./routes/roomRoute')
const userRoute = require('./routes/usersRoute')
const sellerRoute = require('./routes/sellerRoute')
const blogRoute = require('./routes/blogRoute')
const paymentRoute = require('./routes/paymentRoute')
const promotionRoute = require('./routes/promotionRoute')

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



app.use(express.json())

app.use('/api/rooms', roomsRoute)
app.use('/api/users', userRoute)
app.use('/api/sellers', sellerRoute)
app.use('/api/blogs', blogRoute)
app.use('/api/payments', paymentRoute)
app.use('/api/promotions', promotionRoute)




const port = process.env.PORT || 5000;

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set the static folder
  app.use(express.static("client/build"));

  // Serve the index.html file for all non-API routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log('Node Server Started using Nodemon!'));
