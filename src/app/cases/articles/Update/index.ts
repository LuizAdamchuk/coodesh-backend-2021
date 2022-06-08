import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaArticleRepository } from "../../../../db/prisma/PrismaArticleRepository";
import { UpdateArticleController } from "./UpdateArticleController";
import { UpdateArticle } from "./UpdateArticle";

const prismaArticleRepository = new PrismaArticleRepository(prismaClient);

const updateArticle = new UpdateArticle(prismaArticleRepository);

const updateArticleController = new UpdateArticleController(updateArticle);

export { updateArticle, updateArticleController };
