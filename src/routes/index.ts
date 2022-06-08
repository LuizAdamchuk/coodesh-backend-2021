import { Router } from "express";
import articlesRouter from "./articles.routes";

const router = Router();

router.use("/articles", articlesRouter);

export default router;
