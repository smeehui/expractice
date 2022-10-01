class SiteController {
    home(req, res) {
        res.render("home");
    }
    news(req, res) {
        res.render("news");
    }
    search(req, res) {
        res.render("search");
    }
}

export default new SiteController();
