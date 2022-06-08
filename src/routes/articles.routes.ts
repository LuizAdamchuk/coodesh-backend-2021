import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import { createArticleController } from "../app/cases/articles/Create";
import { deleteArticleController } from "../app/cases/articles/Delete";
import { getArticleController } from "../app/cases/articles/Get";
import { listAllArticleController } from "../app/cases/articles/ListAll";
import { updateArticleController } from "../app/cases/articles/Update";

const articlesRouter = Router();

articlesRouter.post("/", (request, response) => {
  return createArticleController.handle(request, response);
});

articlesRouter.get("/:page", (request, response) => {
  return listAllArticleController.handle(request, response);
});

articlesRouter.get("/", (request, response) => {
  return getArticleController.handle(request, response);
});

articlesRouter.delete("/", (request, response) => {
  return deleteArticleController.handle(request, response);
});

articlesRouter.put("/:id", (request, response) => {
  return updateArticleController.handle(request, response);
});

export default articlesRouter;
