const {Router} = require('express')
const { getArticles,getArticle,createArticle,updateArticle,deleteArticle } = require('../controllers/articleController')
const { createComment } = require('../controllers/commentController')
const { verifyUser } = require("../middleware/verifyUser");

const router = Router()
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
});

router.get('/', getArticles);
router.use(verifyUser);
router.get('/home', getArticles);
router.get('/getarticle/:id', getArticle);
router.post('/createarticle',upload.single('image'), createArticle);
router.put('/updatearticle/:id',upload.single('image'), updateArticle);
router.delete('/deletearticle/:id', deleteArticle);
router.post('/createcomment', createComment);

module.exports = router;