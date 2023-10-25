const articleModel = require("../models/articleModel");

module.exports.getArticles = async (req, res) => {
  try {
    const Article = await articleModel.find({});
    res.status(200).json(Article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const Article = await articleModel.findById(id);
    if (!Article) {
      return res.status(404).json(`Can not find any article with id ${id}`);
    }
    res.status(200).json(Article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.createArticle = async (req, res) => {
  try {
    const { title, description, content, authorname, publishdate } = req.body;
    const image = req.file.filename;
    const Article = await articleModel.create({
      title,
      description,
      content,
      authorname,
      image,
      publishdate,
    });
    res.status(200).json(Article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, content, authorname, publishdate } = req.body;
    const updateData = {};

    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (content) updateData.content = content;
    if (authorname) updateData.authorname = authorname;
    if (req.file) updateData.image = req.file.filename;
    if (publishdate) updateData.publishdate = publishdate;

    const Article = await articleModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!Article) {
      return res.status(404).json(`Can not find any article with id ${id}`);
    }

    res.status(200).json(Article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const Article = await articleModel.findByIdAndDelete(id);
    if (!Article) {
      res.status(404).json(`Can not find any article with id ${id}`);
    }
    res.status(200).json(Article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
