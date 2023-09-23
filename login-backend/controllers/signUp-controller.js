import SignUpModel from "../models/signUp-model.js";

export const getAllSignUps = async(req, res, next) =>{
    let signUp;
    try{
        signUp = await SignUpModel.find();
    }catch(err){
        console.log(err);
    }
    if(!signUp){
        return res.status(404).json({message:"Data not available"});
    }
    return res.status(200).json({signUp});
}

export const addSignUp = async(req, res, next) =>{
    const { name, emailSignUp, passwordSignUp}=req.body;
    let existingSignUp;
    try{
        existingSignUp = await SignUpModel.findOne({emailSignUp});
    }catch(err){
        return console.log(err);
    }
    if(existingSignUp){
        return res.status(404).json({message:"A user with same email exists"})
    }
    const signUp = new SignUpModel({
        name, emailSignUp,passwordSignUp
    });
    try{
        await signUp.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(201).json({signUp});
}