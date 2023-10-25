const {Router} = require('express')
const { createUser,userLogin,userLogout } = require('../controllers/userController')
const { verifyUser } = require("../middleware/verifyUser");
const router = Router()

router.post('/createuser', createUser);
router.post('/userlogin', userLogin);
router.post('/userlogout',verifyUser, userLogout);

module.exports = router;