const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '17diacsa',
    database: 'sanrafaeldb'
});

conexion.connect((err)=>{
    if(err){
        console.error('mysql: Error connection' + err);
        return; 
    }
    console.log('mysql: Connected to sanrafaeldb');
});

module.exports = conexion;