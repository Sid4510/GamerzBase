const express=require('express');
const cors=require('cors');
const app=express();
const authRoutes =require('./routes/authRoutes.js');
const eventRoutes =require('./routes/eventRoutes.js');
const requestRoutes=require('./routes/requestRoutes.js')
const profileRoutes=require('./routes/profileRoutes.js')
const newsRoutes=require('./routes/newsRoutes.js')

require('dotenv').config();
require("./config/db.js")

//middlewares
app.use(express.json());
app.use(cors());

const PORT=5000;


app.use("/auth",authRoutes);
app.use("/event",eventRoutes);
app.use('/request',requestRoutes);
app.use('/profile',profileRoutes);
app.use("/news",newsRoutes);




app.listen(PORT,()=>{
    console.log("Server running on port :",PORT);
}) 