import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaArticleRepository } from "../../../../db/prisma/PrismaArticleRepository";
import { GetArticleController } from "./GetArticleController";
import { GetArticle } from "./GetArticle";

const prismaArticleRepository = new PrismaArticleRepository(prismaClient);

const getArticle = new GetArticle(prismaArticleRepository);

const getArticleController = new GetArticleController(getArticle);

export { getArticle, getArticleController };
