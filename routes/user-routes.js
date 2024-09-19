import express from 'express';
import { getUsersData, postUserData } from '../controllers/user-controller.js';
import { getUserById } from '../controllers/user-controller.js';

const userRoute = express.Router();

userRoute.post("/createUser", postUserData);
userRoute.get("/getUsers", getUsersData);
userRoute.get("/getUser/:id", getUserById);

export default userRoute;