import { Schema, model } from "mongoose";

const MessageSchema = new Schema<DMessage>({
  senderId: { type: "Number", required: true },
  chatId: { type: "Number", required: true },
  text: { type: "String", required: true },
  isEdited: { type: "Boolean", required: true },
});

export default model("Message", MessageSchema);
