let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { off } = require('../config/app');
const study = require('../model/study');

// Connect with Survey Model

let Study = require('../model/study');

/* Read Operation */

router.get('/',(req,res,next)=>{
    Study.find((err, studylist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('study', {
                title: 'Survey',
                Studylist: studylist
            })

        }
    });
});

/* Add Operations */
/* Get Route for Displaying Add */
router.get('/add',(req,res,next)=> {
    let newStudy = Study ({
        "Name":req.body.name,
        "Major":req.body.author,
        "Year":req.body.Year,
        "Grad":req.body.Grad,
        "Career":req.body.Career
        });
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('study');
        }
});


/* Edit Operation */
/* Get Route for Displaying Edit */

router.get('/edit/:id', (req,res,next)=> {
    let id = req.params.id;
    study.findById(id,(err,studyToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('/edit',{title: 'Edit Survey', study: studyToEdit});
        }
    })
})

/* Post Edit */

router.post('/edit/:id',(req,res,next)=> {
    let id=req.params.id;
    let updateStudy = Study({
        "_id":id,
        "Name":req.body.name,
        "Major":req.body.author,
        "Year":req.body.Year,
        "Grad":req.body.Grad,
        "Career":req.body.Career
    });
    Study.updateOne({_id:id}, updateStudy,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/study');
        }
    });
});

/* Delete Operation */ 

router.get('/delete/:id', (req,res,next)=> {
    let id =req.params.id;
    Study.deleteOne({_id:id}, (err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/study-list');
        }
    });
});
module.exports = router;