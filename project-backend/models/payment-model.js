import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    nameOfCustomerPayment: {
        type: String,
        required: true
    },
    numberOfCustomerPayment:{
        type: String,
        required: true
    },
    membersOfCustomerPayment: {
        type: String,
        required: true
    },
    nameOfHotelPayment: {
        type: String,
        required: true
    },
    stateOfHotelPayment: {
        type: String,
        required: true
    },
    placeOfHotelPayment: {
        type: String,
        required: true
    },
    costOfHotelPayment: {
        type: String,
        required: true
    },
    fromDateOfHotelPayment: {
        type: String,
        required: true
    },
    toDateOfHotelPayment: {
        type: String,
        required: true
    },
    daysOfHotelPayment: {
        type: String,
        required: true
    },
    totalCostOfHotelPayment: {
        type: String,
        required: true
    }
})

export default mongoose.model('PaymentModel', paymentSchema)