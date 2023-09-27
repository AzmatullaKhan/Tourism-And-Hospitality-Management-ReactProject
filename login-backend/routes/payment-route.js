import express from 'express'
import { addPayment, getAllPayment, getPaymentOnNumber } from '../controllers/payment-controllers';

const paymentRouter= express.Router();

paymentRouter.get('/', getAllPayment);
paymentRouter.post('/addPayment', addPayment);
paymentRouter.post('/getPayments', getPaymentOnNumber);


export default paymentRouter;