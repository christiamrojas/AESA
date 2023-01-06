/*import express from 'express';
import mysql from 'mysql';
import {engine} from 'express-handlebars';
import myconnection from 'express-myconnection';
import session from 'express-session';
import bodyParser from 'body-parser';*/


const express = require('express');
const mysql = require('mysql');

const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({
    extended: false
}));

// Import the router
app.use('/',require('./routes/router'))

app.set('port',4000);
app.listen(app.get('port'),()=>{
    console.log('Server running at ',app.get('port'));
});

