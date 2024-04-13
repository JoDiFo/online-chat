import { v4 } from "uuid";
import bcrypt from "bcrypt";
import "dotenv/config";

import { client } from "../db/connection";
import {
  FIND_USER_BY_EMAIL,
  REGISTER_USER,
  FIND_USER_BY_ACTIVATION_LINK,
  ACTIVATE_USER,
  FIND_USER_BY_ID,
  GET_ALL_USERS,
} from "../db/queries";
import mailService from "./mail-service";
import tokenService from "./token-service";
import UserDto from "../dto/user-dto";
import ApiError from "../exceptions/api-error";
import { JwtPayload } from "jsonwebtoken";

class UserService {
  async register(email: string, password: string) {
    const candidate = await client.query<DUser>(FIND_USER_BY_EMAIL, [email]);
    if (candidate.rowCount !== 0) {
      throw ApiError.BadRequest("User with this email address already exists");
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

  async login(email: string, password: string) {
    const user = await client.query<DUser>(FIND_USER_BY_EMAIL, [email]);
    if (user.rowCount === 0) {
      throw ApiError.BadRequest("user with this email does not exist");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.rows[0].password
    );
    if (!isPasswordCorrect) {
      throw ApiError.BadRequest("incorrect password");
    }

    const userDto = new UserDto(user.rows[0]);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(activationLink: string) {
    const user = await client.query<DUser>(FIND_USER_BY_ACTIVATION_LINK, [
      activationLink,
    ]);

    if (user.rowCount === 0) {
      throw ApiError.BadRequest("Incorrect activation link");
    }

    await client.query(ACTIVATE_USER, [user.rows[0].user_id]);
  }

  async logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken: string) {
    if (!ReferenceError) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(
      refreshToken
    ) as JwtPayload;
    const tokenFromDB = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }

    const user = await client.query<DUser>(FIND_USER_BY_ID, [userData.id]);
    const userDto = new UserDto(user.rows[0]);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async getAllUsers() {
    const users = await client.query<DUser>(GET_ALL_USERS);
    return users.rows;
  }
}

export default new UserService();
