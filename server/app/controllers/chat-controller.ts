import { NextFunction, Request, Response } from "express";
import chatService from "../service/chat-service";

class ChatController {
  public async getAllChats(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const chats = await chatService.getChats(Number(userId));

      res.json(chats);
    } catch (error) {
      next(error);
    }
  }

  public async createChat(req: Request, res: Response, next: NextFunction) {
    try {
      const { chatName, userIds } = req.body;
      const chat = await chatService.createChat(chatName, userIds);

      res.json(chat);
    } catch (error) {
      next(error);
    }
  }

  public async deleteChat(req: Request, res: Response, next: NextFunction) {
    try {
      const { chatId } = req.body;
      await chatService.deleteChat(chatId);

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new ChatController();
