const Article = require("../models/Article");

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    if (articles.length === 0) {
      return res.status(404).json({ message: "No Articles to display" });
    }
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getArticle = async (req, res) => {
  const { articleId } = req.params;
  try {
    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createArticle = async (req, res) => {
  try {
    const { title, category, description, content, author, tags, image } =
      req.body;
    const article = new Article({
      title,
      category,
      description,
      content,
      author,
      tags,
      image,
    });

    await article.save();
    res.status(201).json({ message: "Article created successfully", article });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateArticle = async (req, res) => {
  const { articleId } = req.params;
    try {
        const updatedArticle = await Article.findByIdAndUpdate(articleId, { $set: req.body}, { new: true, runValidators: true })

        if (!updatedArticle) {
            return res.status(404).json({ error: "Article not found" })
        }

        res.status(201).json(updatedArticle)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const deleteArticle = async (req, res) => {
  const { articleId } = req.params;
    try {
        const article = await Article.findById(articleId)

        if (!article) {
            return res.status(404).json({ error: "Article not found" })
        }

        await Article.findByIdAndDelete(articleId)
        res.status(201).json({ message: "Article deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = { getArticles, getArticle, createArticle, updateArticle, deleteArticle };
