import { IArticleRepository } from "../../../repositories/IArticleRepository";

export class GetArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(id: number) {
    const result = await this.articleRepository.get(id);
    return result;
  }
}
