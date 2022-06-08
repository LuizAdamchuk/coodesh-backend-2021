import { IArticleRepository } from "../../../repositories/IArticleRepository";

export class ListAllArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(page: number) {
    const result = await this.articleRepository.listAll(page);
    return result;
  }
}
