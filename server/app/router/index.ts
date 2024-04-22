import Router from "express";
import { body } from "express-validator";
import UserController from "../controllers/user-controller";
import authMiddleware from "../middlewares/auth-middleware";
import chatController from "../controllers/chat-controller";

const router = Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 20 }),
  UserController.register
);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/users", authMiddleware, UserController.getUsers);
router.post("/createChat", chatController.createChat);
router.delete("/deleteChat", chatController.deleteChat);

export default router;
