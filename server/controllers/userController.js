// Invoke database connection
const conexion = require('../database/db');

// Procedure to save

exports.save = (req,res)=>{
    const {email,name,rol,password} = req.body;
    
    conexion.query('INSERT INTO tb_login set ?',{name:name,email:email,role:rol,password:password},(error,results)=>{
        if(error){
            console.error(error);
        }
        else{
            res.redirect('/');
        }
    });
};

exports.update = (req,res) =>{
    const {id,name,email,rol} = req.body;
    conexion.query('update tb_login set ? where id=?',[{name: name, email:email , role: rol}, id ],(error,results)=>{
        if(error){
            console.error(error);
        }
        else{
            res.redirect('/');
        }
    });
};