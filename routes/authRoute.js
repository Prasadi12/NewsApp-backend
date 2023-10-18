const {Router} = require('express')
const { createUser,userLogin,userLogout } = require('../controllers/userController')
const { createAdmin,adminLogin,adminLogout } = require('../controllers/adminController')
const router = Router()

//userAuth routes
router.post('/createuser', createUser);
router.post('/userlogin', userLogin);
router.post('/userlogout', userLogout);

//adminAuth routes
router.post('/createadmin', createAdmin);
router.post('/adminlogin', adminLogin);
router.post('/adminlogout', adminLogout);

module.exports = router;