import express from 'express'
import { addHotel, findHotelOnId, getAllHotel } from '../controllers/hotel-controllers.js';

const hotelRouter= express.Router();

hotelRouter.get('/', getAllHotel)
hotelRouter.post('/add', addHotel);
hotelRouter.post('/find', findHotelOnId)

export default hotelRouter;