import { Request, Response } from "express";
import userService from "../service/user-service";
import "dotenv/config";

class UserController {
  public async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userData = await userService.register(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }

  public async login(req: Request, res: Response) {}

  public async logout(req: Request, res: Response) {}

  public async activate(req: Request, res: Response) {
    try {
      const clientUrl = process.env.CLIENT_URL;
      if (!clientUrl) {
        throw new Error("client url is not defined");
      }

      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(clientUrl);
    } catch (error) {
      console.log(error);
    }
  }

  public async refresh(req: Request, res: Response) {}

  public async getUsers(req: Request, res: Response) {
    try {
      res.json(["123", "234", "2022"]);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
