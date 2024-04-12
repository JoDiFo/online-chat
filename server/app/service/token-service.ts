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

  async saveToken(userId: number, refreshToken: string) {
    const tokenData = await tokenModel.findOne({ userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    
    const token = await tokenModel.create({ userId, refreshToken });
    return token;
  }
}

export default new TokenService();
