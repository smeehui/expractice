import siteRouter from "./siteRoute";
import feedbackRouter from "./feedbackRoute";

function route(app) {
    app.use("/feedback", feedbackRouter);
    app.use("/", siteRouter);
}

export default route;
