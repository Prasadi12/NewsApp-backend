const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
        },
        image : {
            type: String,
            // required: [true, 'Image is required'],
        },
        content : {
            type: String,
            required: [true, 'Content is required'],
        }
    },{
        timestamps: true,
    }
);

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;