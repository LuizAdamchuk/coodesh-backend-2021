import { Article } from "../../../entities/Article";
import { IArticleRepository } from "../../../repositories/IArticleRepository";
import { ICreateArticleRequestDTO } from "./CreateArticleDTO";

export class CreateArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(data: ICreateArticleRequestDTO) {
    const article = new Article(data);
    await this.articleRepository.save(article);
  }
}
