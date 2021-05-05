const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');


//auth
router.post("/register", authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

//user 
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateComment);
router.delete('/:id', userController.deleteUser);

//offers


module.exports = router;