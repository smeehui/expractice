import express from "express";
import { Router } from "express";
import SiteController from "../app/controllers/SiteController";

const siteRouter = new Router();

siteRouter.use("/search", SiteController.search);
siteRouter.use("/news", SiteController.news);
siteRouter.use("/", SiteController.home);

export default siteRouter;
