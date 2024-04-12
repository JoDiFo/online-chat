import { Schema, model } from "mongoose";

const TokenSchema = new Schema<DRefreshToken>({
  userId: { type: "Number", required: true },
  refreshToken: { type: "String", required: true },
});

export default model("Token", TokenSchema);
