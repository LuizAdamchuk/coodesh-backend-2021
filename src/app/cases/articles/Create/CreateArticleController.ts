import { Request, Response } from "express";
import { CreateArticle } from "./CreateArticle";

export class CreateArticleController {
  constructor(private createArticle: CreateArticle) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      updatedAt,
      featured,
    } = request.body;

    try {
      await this.createArticle.execute({
        id,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        updatedAt,
        featured,
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
