import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaArticleRepository } from "../../../../db/prisma/PrismaArticleRepository";
import { DeleteArticleController } from "./DeleteArticleController";
import { DeleteArticle } from "./DeleteArticle";

const prismaArticleRepository = new PrismaArticleRepository(prismaClient);

const deleteArticle = new DeleteArticle(prismaArticleRepository);

const deleteArticleController = new DeleteArticleController(deleteArticle);

export { deleteArticle, deleteArticleController };
