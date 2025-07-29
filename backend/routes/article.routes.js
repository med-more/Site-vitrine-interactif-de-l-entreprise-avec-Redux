const express = require("express")
const router = express.Router()
const articleController = require("../controllers/article.controller")

router.get("/list", articleController.getArticles)
router.get("/article/:articleId", articleController.getArticle)
router.post("/create", articleController.createArticle)
router.put("/article/update/:articleId", articleController.updateArticle)
router.delete("/article/delete/:articleId", articleController.deleteArticle)
router.get("/test", async (req, res) => {
    res.send("article backend working")
})

module.exports = router