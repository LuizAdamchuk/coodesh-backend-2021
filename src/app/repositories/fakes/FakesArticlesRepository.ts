import { Article } from "../../entities/Article";
import { IArticleRepository } from "../IArticleRepository";
import { ICreateArticleRequestDTO } from "../../cases/articles/Create/CreateArticleDTO";
import { IUpdateArticleRequestDTO } from "../../cases/articles/Update/UpdateArticleDTO";

let mockArticle = {
  id: 1,
  title: "teste",
  featured: false,
  imageUrl: "teste",
  newsSite: "teste",
  summary: "teste",
  publishedAt: "teste",
  url: "teste",
  updatedAt: "teste",
};

export default class FakeArticlesRepository implements IArticleRepository {
  private articles: Article[] = [mockArticle];

  public async listAll(page: number): Promise<Article[]> {
    return this.articles;
  }

  public async save(data: ICreateArticleRequestDTO): Promise<void> {
    const article = new Article(data);

    const verify = this.articles.find((article) => article.id === data.id);
    if (verify) throw new Error();

    article.id = this.articles.length + 1;

    article.title = data.title;
    article.featured = data.featured || false;
    article.url = data.url;
    article.imageUrl = data.imageUrl;
    article.newsSite = data.newsSite;
    article.summary = data.summary;
    article.publishedAt = data.publishedAt;

    this.articles.push(article);
  }

  public async get(id: number): Promise<Article | undefined> {
    const article = this.articles.find((article) => article.id === id);
    if (!article) throw new Error();

    return article;
  }

  public async update(
    id: number,
    data: IUpdateArticleRequestDTO
  ): Promise<Article> {
    const article = this.articles.find((article) => article.id === id);

    if (!article) {
      throw new Error("Article not found");
    }

    if (data.title) {
      article.title = data.title;
    }

    if (data.featured) {
      article.featured = data.featured;
    }

    if (data.url) {
      article.url = data.url;
    }

    if (data.imageUrl) {
      article.imageUrl = data.imageUrl;
    }

    if (data.newsSite) {
      article.newsSite = data.newsSite;
    }

    if (data.summary) {
      article.summary = data.summary;
    }

    if (data.publishedAt) {
      article.publishedAt = data.publishedAt;
    }

    return article;
  }

  public async delete(id: number): Promise<void> {
    const article = this.articles.find((article) => article.id === id);
    if (!article) throw new Error();
    this.articles = this.articles.filter((article) => article.id !== id);
  }
}
