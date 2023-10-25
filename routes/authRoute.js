const {Router} = require('express')
const { createUser,userLogin,userLogout } = require('../controllers/userController')
const router = Router()

router.post('/createuser', createUser);
router.post('/userlogin', userLogin);
router.post('/userlogout', userLogout);

module.exports = router;