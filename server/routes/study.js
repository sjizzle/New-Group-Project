let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect with Survey Model

let Study = require('../model/study');
let studyController = require('../controller/study');

// requireAuth function
function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* Read Operation */
/* Route to Study */

router.get('/', studyController.displayStudyList);

/* Add Operations */
/* Get Route for Displaying Add */
router.get('/add',requireAuth, studyController.displayAddPage);

/* Post route for processing add page */
router.post('/add',requireAuth, studyController.processAddPage);

/* Edit Operation */
/* Get Route for Displaying Edit */

router.get('/edit/:id',requireAuth, studyController.displayEditPage);
/* Post Edit */

router.post('/edit/:id',requireAuth, studyController.processEditPage);

/* Delete Operation */ 

router.get('/delete/:id',requireAuth, studyController.performDelete);
module.exports = router;
