import { request } from 'http';
import user from "../models/user-model.js";
import { response } from 'express';


export const postUserData = async ( req, res ) => {
    try{
        const {name, userName, password, email} = req.body;
        console.log(name, email, password, userName);
        const isEmailExisted = await user.findOne({email: email});
        if(isEmailExisted){
            return res.status(400).json({message: "Email already existed"});
        }
        

        const userData = new user({
            name,
            email,
            password,
            userName
        })
        await userData.save()
        return res.status(200).json({message: "Data saved successfully", success: true, userData});
    }
    catch(error){
        res.status(500).json(error.message);
    }
};

export const getUsersData = async(req, res) => {
    try{
        const getUsers = await user.find()
        return res.status(200).json({success: true, getUsers});
    }
    catch(error){
        return res.status(500).json(error.message);
    }
};

export const getUserById = async(req, res) => {
    try{
        const getUserId = req.params.id;
        const getUser = await user.findById(getUserId);
        return res.status(200).json({success: true, message: "user data fetched", data: getUser});
    }
    catch(error){
        return res.status(500).json(error.message)
    }
};



// id: 66deeec3cf8537791f4821f2
// http://localhost:4000/getUser/66deeec3cf8537791f4821f2
// http://localhost:4000/createUser