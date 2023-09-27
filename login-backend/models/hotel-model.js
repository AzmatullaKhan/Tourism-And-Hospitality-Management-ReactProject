import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    idHotel: {
        type: Number,
        required: true,
        unique: true
    },
    nameHotel: {
        type: String,
        required: true
    },
    stateHotel: {
        type: String,
        required: true
    },
    placeHotel: {
        type: String,
        required: true
    },
    totalAvailableRoomsHotel: {
        type: Number,
        required: true
    },
    costPerNightHotel: {
        type: String,
        required: true
    },
    ratingHotel: {
        type:Number,
        required: true
    }
})

export default mongoose.model('HotelModel', hotelSchema);