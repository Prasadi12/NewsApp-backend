const {Router} = require('express')
const { getArticles,getArticle,createArticle,updateArticle,deleteArticle } = require('../controllers/articleController')
const router = Router()


router.get('/', getArticles);
router.get('/getarticle/:id', getArticle);

router.post('/createarticle', createArticle);
router.put('/updatearticle/:id', updateArticle);
router.delete('/deletearticle/:id', deleteArticle);

module.exports = router;