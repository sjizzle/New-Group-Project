let express = require('express');
let router = express.Router();


// Connect with Study Model
let Study = require('../model/study');
let indexController = require('../controller/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET Content page. */
router.get('/content', indexController.displayContentPage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/* Get router for login page */
router.get('/login', indexController.displayLoginPage);

/* Post router for login page */
router.post('/login', indexController.processLoginPage);

/* Get router for Register page */
router.get('/register', indexController.displayRegisterPage);

/* Post router for Register page */
router.post('/register', indexController.processRegisterPage);

/* Post router for logout page */
router.get('/logout', indexController.performLogout);

module.exports = router;
