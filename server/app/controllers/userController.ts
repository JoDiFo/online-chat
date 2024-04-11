import { client } from "../db/connection";
import { REGISTER_USER } from "../db/queries";
import { Request, Response } from "express";

class UserController {
  public static async handleRegister(req: Request, res: Response) {
    // client.query(REGISTER_USER, [username, email, password]);
    console.log(req.body);
    res.send("response").status(200);
  }
}

export default UserController;
