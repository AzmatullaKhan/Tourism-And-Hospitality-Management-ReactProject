import express from 'express'

const paymentRouter= express.Router();

paymentRouter.get('/', (req, res)=>{res.send("HEllo from server")});

export default paymentRouter;