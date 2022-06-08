import { Request, Response } from "express";
import { ListAllArticle } from "./ListAllArticle";

export class ListAllArticleController {
  constructor(private listAllArticle: ListAllArticle) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { page } = request.params;
      let res = await this.listAllArticle.execute(Number(page));
      if (res.length == 0) {
        throw new Error("No data for this pagination");
      }
      return response.status(201).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
