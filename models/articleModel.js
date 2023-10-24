const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
        },
        image : {
            type: String,
            required: [true, 'Image is required'],
        },
        description : {
            type: String,
            required: [true, 'description is required'],
        },
        content : {
            type: String,
            required: [true, 'Content is required'],
        },
        authorname: {
            type: String,
            required: [true, 'Author name is required'],
        },
        publishdate: {
            type: String,
            required: true,
        },
    },{
        timestamps: true,
    }
);

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;