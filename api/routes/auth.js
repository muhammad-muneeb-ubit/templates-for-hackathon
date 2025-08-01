import express from "express"
import { loginController, OTPVerifyController, signupController } from "../controller/authController.js"

const authRouter = express.Router()





authRouter.post("/signup", signupController)
authRouter.post("/login", limiter, loginController)
authRouter.post("/otp-verification", OTPVerifyController)



export default authRouter
