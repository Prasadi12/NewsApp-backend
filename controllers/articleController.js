
const articleModel = require('../models/articleModel');

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
        const Article = await articleModel.findById(id); // Removed unnecessary object from findById function
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
            const image = req.file.destination+'/'+req.file.filename;
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
        const Article = await articleModel.findByIdAndUpdate(id, { // Removed unnecessary object from findByIdAndUpdate function
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            authorname: req.body.authorname,
            publishdate: req.body.publishdate,
        });
        if (!Article) {
            res.status(404).json(`Can not find any article with id ${id}`);
        }
        res.status(200).json(Article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const Article = await articleModel.findByIdAndDelete(id); // Removed unnecessary object from findByIdAndDelete function
        if (!Article) {
            res.status(404).json(`Can not find any article with id ${id}`);
        }
        res.status(200).json(Article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
