import express from "express";
import { getAllLogins } from "../controllers/login-controllers.js";
import signUpModel from "../models/signUp-model.js";

const LoginRouter = express.Router();

LoginRouter.post('/allLogins', getAllLogins);

export default LoginRouter;