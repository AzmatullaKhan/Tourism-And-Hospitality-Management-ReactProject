import paymentModel from "../models/payment-model.js";

export const getAllPayment=async(req, res, next)=>{
    let u;
    try{
        u = await paymentModel.find();
    }catch(err){
        return console.log(err)
    }
    if(!u)
        return res.status(404).json({message:"No payments found"})
    return res.status(404).json({u});
}

export const addPayment=async (req, res, next)=>{
    let u;
    let { nameOfCustomerPayment, numberOfCustomerPayment, membersOfCustomerPayment, nameOfHotelPayment, stateOfHotelPayment, placeOfHotelPayment, costOfHotelPayment, fromDateOfHotelPayment, toDateOfHotelPayment, daysOfHotelPayment, totalCostOfHotelPayment }= req.body;
    u = new paymentModel({
        nameOfCustomerPayment, numberOfCustomerPayment, membersOfCustomerPayment, nameOfHotelPayment, stateOfHotelPayment, placeOfHotelPayment, costOfHotelPayment, fromDateOfHotelPayment, toDateOfHotelPayment, daysOfHotelPayment, totalCostOfHotelPayment
    });
    try{
        await u.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(200).json({u});
}

export const getPaymentOnNumber=async(req, res, next)=>{
    let u;
    let { numberOfCustomerPayment }=req.body;
    try{
        u = await paymentModel.findOne({numberOfCustomerPayment})
    }catch(err){
        return console.log(err);
    }
    if(!u)
        return res.status(404).json({message:"No records of payment fouund"});

    return res.status(200).json({u});
}