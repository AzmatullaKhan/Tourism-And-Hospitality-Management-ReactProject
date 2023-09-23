import signUpModel from "../models/signUp-model.js";

export const getAllLogins = async(req, res, next) =>{
    let u;
    let { emailSignUp, passwordSignUp }= req.body;
    try{
        u = await signUpModel.findOne({emailSignUp});
    }catch(err){
        return console.log(err);
    }
    if(!u){
        return res.status(404).json({message:"Incorrect email"})
    }
    if(u){
        if( passwordSignUp==u.passwordSignUp){
            return res.status(200).json(u);
        }
        else{
            return res.status(404).json({message:"Incorrect Password"});
        }
    }

}