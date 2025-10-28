import Router from "express";

const categoryRouter = Router();

categoryRouter.post("/", craeteFoodCategory);

export default categoryRouter;
