const express = require('express');
const router = express.Router();

// Invoke database connection
const conexion = require('../database/db.js');


router.get('/',(req,res)=>{

    conexion.query('SELECT *FROM tb_login',(error,results)=>{
        if(error){
            throw error;
        } else{
            res.render('index',{results: results})
        }
    });
});

router.get('/create',(req,res)=>{
    res.render('create.ejs');
});

router.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('select * from tb_login where id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',{user: results[0]});
        }
    });
});

// Invoke method to get users
const usersController = require('../controllers/userController');
router.post('/save',usersController.save);
router.post('/update',usersController.update);

router.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('delete from tb_login where id=?',[id],(error,results)=>{
        if(error){
            throw error;
        } else{
            res.redirect('/');
        }
    });
});


module.exports = router; 