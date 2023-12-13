import { Router } from "express";
import { loginController, registerController } from "../controllers/user.controllers.js";
import { registerValidator, loginValidator } from "../middlewares/user.middlewares.js";
import wrapError from "../utils/wrapError.js";
// wrapError is used to carry error to defaultErrorHandler if error occur
const userRouter = Router();

userRouter.post("/register", registerValidator, wrapError(registerController));
userRouter.post("/login", loginValidator, wrapError(loginController));

export default userRouter;
