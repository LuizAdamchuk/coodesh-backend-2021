import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaArticleRepository } from "../../../../db/prisma/PrismaArticleRepository";
import { ListAllArticleController } from "./ListAllArticleController";
import { ListAllArticle } from "./ListAllArticle";

const prismaArticleRepository = new PrismaArticleRepository(prismaClient);

const listAllArticle = new ListAllArticle(prismaArticleRepository);

const listAllArticleController = new ListAllArticleController(listAllArticle);

export { listAllArticle, listAllArticleController };
