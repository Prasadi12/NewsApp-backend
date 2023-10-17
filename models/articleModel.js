const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        age : {
            type: Number,
            required: true,
        }
    },{
        timestamps: true,
    }
);

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;