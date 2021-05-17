const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const offersController = require('../controllers/offers.controller');


//auth
router.post("/register", authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

//user 
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateComment);
router.delete('/:id', userController.deleteUser);

//offers
router.patch('/add-offer/:id', offersController.addOffer);
router.patch('/update-offer/:id', offersController.updateOffer);
router.patch('/delete-offer/:id', offersController.deleteOffer);
router.patch('/add-favorite/:id', offersController.addFavorite);
router.patch('/remove-favorite/:id', offersController.removeFavorite);


module.exports = router;