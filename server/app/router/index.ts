import Router from "express";
import UserController from "../controllers/userController";

const router = Router();

router.post("/post", UserController.handleRegister);

export default router;
