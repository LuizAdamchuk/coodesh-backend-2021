import { IArticleRepository } from "../../../repositories/IArticleRepository";

export class DeleteArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(id: number) {
    const result = await this.articleRepository.delete(id);
    return result;
  }
}
