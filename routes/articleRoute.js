const {Router} = require('express')
const { getArticles,getArticle,createArticle,updateArticle,deleteArticle } = require('../controllers/articleController')
const router = Router()
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
});


router.get('/', getArticles);
router.get('/getarticle/:id', getArticle);

router.post('/createarticle',upload.single('image'), createArticle);
router.put('/updatearticle/:id', updateArticle);
router.delete('/deletearticle/:id', deleteArticle);

module.exports = router;