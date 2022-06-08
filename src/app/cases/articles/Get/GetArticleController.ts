import { Request, Response } from "express";
import { GetArticle } from "./GetArticle";

export class GetArticleController {
  constructor(private getArticle: GetArticle) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    try {
      const res = await this.getArticle.execute(Number(id));
      return response.status(201).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
