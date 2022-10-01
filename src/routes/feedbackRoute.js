import express from "express";
import { Router } from "express";
import FeedbackController from "../app/controllers/FeedbackController.js";

const feedbackRouter = new Router();
feedbackRouter.use("/", FeedbackController.render);
export default feedbackRouter;
