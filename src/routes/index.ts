import { Router } from "express";
import { WelcomeController } from "../app/cases/welcome/welcome";
import articlesRouter from "./articles.routes";

const router = Router();
router.get("/", new WelcomeController().handle);
router.use("/articles", articlesRouter);

export default router;
