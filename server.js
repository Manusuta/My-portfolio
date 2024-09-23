const express=require("express");
const connectDb=require("./conn/db")
const portfolioRoute=require("./routes/portfolioRoute")
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const app=express();
const cors = require("cors");
connectDb();
app.use(express.json());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//   }) 


app.use(cors());
require('dotenv').config({path:'.env'});
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/portfolio",portfolioRoute);
app.listen(process.env.PORT,()=>{
    console.log(`server listen at ${process.env.PORT}`);

})