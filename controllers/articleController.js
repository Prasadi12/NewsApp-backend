const articleModel = require('../models/articleModel')

module.exports.getArticles = async(req,res) =>{
    try {
        const Article = await articleModel.find({})
        res.status(200).json(Article)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.getArticle = async(req,res) => {
    try {
        const {id} = req.params;
        const Article = await articleModel.findById({_id:id})
        if(!Article){
            return res.status(404).json(`Can not find any student with id ${id}`)
        }
        res.status(200).json(Article)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.createArticle = async(req,res) =>{
    try {
        const Article = await articleModel.create(req.body)
        res.status(200).json(Article)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports.updateArticle = async(req,res) =>{
    try {
        const {id} = req.params;
        const Article = await articleModel.findByIdAndUpdate({_id:id}, {
            name: req.body.name, 
            age: req.body.age
        })
        if(!Article){
            res.status(404).json(`Can not find any student with id ${id}`)
        }
        res.status(200).json(Article)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

module.exports.deleteArticle = async(req,res) =>{
    try {
        const {id} = req.params;
        const Article = await articleModel.findByIdAndDelete({_id:id})
        if(!Article){
            res.status(404).json(`Can not find any student with id ${id}`)
        }
        res.status(200).json(Article)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}