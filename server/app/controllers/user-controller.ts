import { NextFunction, Request, Response } from "express";
import userService from "../service/user-service";
import "dotenv/config";
import { validationResult } from "express-validator";
import ApiError from "../exceptions/api-error";

class UserController {
  public async register(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("validation error", errors.array()));
      }
      const { email, password } = req.body;
      const userData = await userService.register(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  public async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }

  public async activate(req: Request, res: Response, next: NextFunction) {
    try {
      const clientUrl = process.env.CLIENT_URL;
      if (!clientUrl) {
        throw new Error("client url is not defined");
      }

      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(clientUrl);
    } catch (error) {
      next(error);
    }
  }

  public async refresh(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(["123", "234", "2022"]);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
