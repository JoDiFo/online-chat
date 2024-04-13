import jwt from "jsonwebtoken";
import "dotenv/config";
import tokenModel from "../models/token-model";

class TokenService {
  generateTokens(payload: object) {
    const accessSecret = process.env.JWT_ACCESS_SECRET;
    if (!accessSecret) {
      throw new Error("access secret is not defined");
    }
    const accessToken = jwt.sign(payload, accessSecret, {
      expiresIn: "15m",
    });

    const refreshSecret = process.env.JWT_REFRESH_SECRET;
    if (!refreshSecret) {
      throw new Error("refresh secret is not defined");
    }
    const refreshToken = jwt.sign(payload, refreshSecret, {
      expiresIn: "15d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token: string) {
    try {
      const accessSecret = process.env.JWT_ACCESS_SECRET;
      if (!accessSecret) {
        throw new Error("access secret is not defined");
      }

      const userData = jwt.verify(token, accessSecret);
      return userData;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const refreshSecret = process.env.JWT_REFRESH_SECRET;
      if (!refreshSecret) {
        throw new Error("refresh secret is not defined");
      }

      const userData = jwt.verify(token, refreshSecret);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async saveToken(userId: number, refreshToken: string) {
    const tokenData = await tokenModel.findOne({ userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await tokenModel.create({ userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken: string) {
    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }

  async findToken(refreshToken: string) {
    const tokenData = await tokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

export default new TokenService();
