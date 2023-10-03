import express from 'express'
import { addSignUp, getAllSignUps } from '../controllers/signUp-controller.js';

const SignUpRouter= express.Router();

SignUpRouter.get('/', getAllSignUps)
SignUpRouter.post('/addSignUp', addSignUp);


export default SignUpRouter;