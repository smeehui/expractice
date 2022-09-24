import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/news", (req, res) => {
    res.render("news");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
