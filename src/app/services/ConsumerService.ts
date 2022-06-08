import axios from "axios";
import { prismaClient } from "../../db/prisma/prismaClient";
import { createArticle } from "../cases/articles/Create";
import { ICreateArticleRequestDTO } from "../cases/articles/Create/CreateArticleDTO";

export class ConsumerService {
  public async getCount() {
    try {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles/count"
      );

      return response.data;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public async listAllArticles(page: number = 1, limit: number = 10) {
    try {
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}&_start=${
          (page - 1) * limit
        }`
      );

      return response.data;
    } catch (error: any) {
      console.log(error.message);

      throw new Error(error.message);
    }
  }

  public async saveLogCron(quantity: number) {
    await prismaClient.cronJob.create({
      data: {
        quantity,
      },
    });
  }

  public async saveArticles(articles: ICreateArticleRequestDTO[]) {
    articles.map(async (article) => {
      try {
        await createArticle.execute({
          id: article.id,
          title: article.title,
          url: article.url,
          imageUrl: article.imageUrl,
          newsSite: article.newsSite,
          summary: article.summary,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          featured: article.featured,
        });
      } catch (error) {}
    });
  }
}
