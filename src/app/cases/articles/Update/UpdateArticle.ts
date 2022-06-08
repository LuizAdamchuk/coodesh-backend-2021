import { IArticleRepository } from "../../../repositories/IArticleRepository";

export class UpdateArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(id: number, article) {
    const result = await this.articleRepository.update(id, article);
    return result;
  }
}
