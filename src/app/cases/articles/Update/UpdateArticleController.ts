import { Request, Response } from "express";
import { UpdateArticle } from "./UpdateArticle";

export class UpdateArticleController {
  constructor(private updateArticle: UpdateArticle) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
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
      const res = await this.updateArticle.execute(Number(id), {
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        updatedAt,
        featured,
      });
      return response.status(200).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
