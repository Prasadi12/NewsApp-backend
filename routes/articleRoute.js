const {Router} = require('express')
const { getArticles,getArticle,createArticle,updateArticle,deleteArticle } = require('../controllers/articleController')
const router = Router()

router.get('/', getArticles);
router.get('/get/:id', getArticle);
router.post('/create', createArticle);
router.put('/update/:id', updateArticle);
router.delete('/delete/:id', deleteArticle);

module.exports = router;