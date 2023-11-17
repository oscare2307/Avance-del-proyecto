const express = require('express');

const router = require('./routes/cliente.router')

const app = express();

app.set('view engine','ejs')
app.set('views',__dirname + "/views");
app.use('/assets',express.static('assets'));


app.get('/',function(req,res){
    res.render('index');
    });

 app.get('/Pagina2',function(req,res){
        res.render('Pagina2');
        });


app.get('/pagina3',function(req,res){
    res.render('pagina3');
    });        
    

app.get('/login',function(req,res){
    res.render('login');
    });

app.get('/portafolio',function(req,res){
    res.render('portafolio');
    });    
    
       
    app.use('/v1',router)

    module.exports =app;
      