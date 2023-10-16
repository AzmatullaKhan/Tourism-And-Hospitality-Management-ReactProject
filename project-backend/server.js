import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import LoginRouter from "./routes/login-route.js";
import SignUpRouter from "./routes/signUp-route.js";
import hotelRouter from "./routes/hotel-routes.js";
import paymentRouter from "./routes/payment-route.js";
const server=express()
const port=5000;

server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
let url='SET YOUR URL';

mongoose.connect(url).then(()=>{server.listen(port)})
.then(()=>{console.log(`connect to ${port}`)})
.catch((err)=>console.log(err));

server.use('/loginServer', LoginRouter);
server.use('/signUpServer', SignUpRouter);
server.use('/hotelServer', hotelRouter)
server.use('/paymentServer', paymentRouter);
// server.post("/", (req, res)=>{
//     console.log(req.body);
//     res.json(req.body);
// })

// server.listen(port, ()=>{
//     console.log(`connect to ${port}`);
// })
