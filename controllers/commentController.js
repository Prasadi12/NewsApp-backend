const commentModel = require('../models/commentModel');

module.exports.createComment = async (req, res) => {
    try {
            const Comment = await commentModel.create(req.body);
            res.status(200).json(Comment);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};