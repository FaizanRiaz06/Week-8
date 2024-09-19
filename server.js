import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import userRoute from './routes/user-routes.js';
import productRoutes from './routes/product-routes.js';

dotenv.config();

const app = express();
//for connection
app.use(cors());
//for json data
app.use(express.json());
//body parser for taking data from document or body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/", userRoute);
app.use("/", productRoutes);

const port=process.env.PORT
connectDB()
app.listen(port,()=>{
    console.log("Server Created");
});