import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaArticleRepository } from "../../../../db/prisma/PrismaArticleRepository";
import { CreateArticleController } from "./CreateArticleController";
import { CreateArticle } from "./CreateArticle";

const prismaArticleRepository = new PrismaArticleRepository(prismaClient);

const createArticle = new CreateArticle(prismaArticleRepository);

const createArticleController = new CreateArticleController(createArticle);

export { createArticle, createArticleController };
