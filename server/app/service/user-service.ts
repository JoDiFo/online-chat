import { v4 } from "uuid";
import bcrypt from "bcrypt";
import "dotenv/config";

import { client } from "../db/connection";
import { FIND_USER_BY_EMAIL, REGISTER_USER } from "../db/queries";
import mailService from "./mail-service";
import tokenService from "./token-service";
import UserDto from "../dtos/user-dto";

class UserService {
  async registration(email: string, password: string) {
    const candidate = await client.query<DUser>(FIND_USER_BY_EMAIL, [email]);
    if (candidate.rowCount !== 0) {
      throw new Error(`User with this email address (${email}) already exists`);
    }

    const hashedPassword = await bcrypt.hash(password, 3);
    const activationLink = v4();
    const user = await client.query<DUser>(REGISTER_USER, [
      "some",
      email,
      hashedPassword,
      activationLink,
    ]);

    const apiUrl = process.env.API_URL;
    if (!apiUrl) {
      throw new Error("api url is not defined");
    }
    await mailService.sendActivationMail(
      email,
      `${apiUrl}/api/activate/${activationLink}`
    );

    const userDto = new UserDto(user.rows[0]);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
