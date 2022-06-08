import { Request, Response } from "express";
import { DeleteArticle } from "./DeleteArticle";

export class DeleteArticleController {
  constructor(private deleteArticle: DeleteArticle) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.body;
      await this.deleteArticle.execute(id);
      return response.status(200).json({ message: "Deleted" });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
