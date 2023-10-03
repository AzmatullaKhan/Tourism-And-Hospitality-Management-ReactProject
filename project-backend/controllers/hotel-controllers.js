import HotelModel from '../models/hotel-model.js';

export const getAllHotel = async(req, res, next)=>{
    let u;
    try{
        u=await HotelModel.find();
    }catch(err){
        return console.log(err);
    }
    if(!u){
        return res.status(404).json({message:"Data ain't available"});
    }
    return res.status(200).json(u);
}

export const addHotel= async(req, res, next) =>{
    let { idHotel, nameHotel, stateHotel, placeHotel, totalAvailableRoomsHotel, costPerNightHotel, ratingHotel}=req.body;
    let existingHotel;
    try{
        existingHotel= await HotelModel.findOne({idHotel});
    }catch(err){
        console.log(err);
    }
    if(existingHotel){
        return res.status(404).json({message:"hotel with same is exist"})
    }
    const b= new HotelModel({
        idHotel, nameHotel, stateHotel, placeHotel, totalAvailableRoomsHotel, costPerNightHotel, ratingHotel
    })
    try{
        await b.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(200).json(b);
}

export const findHotelOnId= async(req, res, next) =>{
    let { idHotel }=(req.body);
    let existingHotel;
    try{
        existingHotel= await HotelModel.findOne({idHotel});
    }catch(err){
        console.log(err);
    }
    if(existingHotel){
        return res.status(200).json(existingHotel);
    }
    return res.status(404).json({message:"Didn't find any hotels based on given ID"});
}