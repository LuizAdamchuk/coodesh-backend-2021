import { PrismaClient } from "@prisma/client";
import { ICreateArticleRequestDTO } from "../../app/cases/articles/Create/CreateArticleDTO";
import { IArticleRepository } from "../../app/repositories/IArticleRepository";

export class PrismaArticleRepository implements IArticleRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(article: ICreateArticleRequestDTO): Promise<void> {
    await this.prisma.article.create({
      data: {
        ...article,
      },
    });
  }

  async listAll(page: number): Promise<any> {
    const paginationEnd = page * 100;
    const paginationStart = paginationEnd - 100;
    const result = await this.prisma.article.findMany({
      skip: paginationStart,
      take: paginationEnd,
      orderBy: {
        id: "desc",
      },
    });

    return result;
  }

  async get(id: number): Promise<any> {
    const result = await this.prisma.article.findFirst({
      where: {
        id,
      },
    });
    return result;
  }

  async delete(id: number): Promise<any> {
    const result = await this.prisma.article.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async update(id, article): Promise<any> {
    const result = await this.prisma.article.update({
      where: {
        id,
      },
      data: {
        ...article,
      },
    });
    return result;
  }
}
