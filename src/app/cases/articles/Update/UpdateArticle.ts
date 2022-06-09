import { IArticleRepository } from "../../../repositories/IArticleRepository";
import { IUpdateArticleRequestDTO } from "./UpdateArticleDTO";

export class UpdateArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(id: number, article: IUpdateArticleRequestDTO) {
    const result = await this.articleRepository.update(id, article);
    return result;
  }
}
