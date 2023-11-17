//Carpeta routes
//cliente.router.js
const router = require("express").Router()
const controller = require ('../controllers/clientes.control')

router.get('/index',controller.clientes)

router.get('/Pagina2',controller.clientes)

router.get('/pagina3',controller.clientes)

router.get('/login',controller.clientes)

router.get('/portafolio',controller.clientes)

router.get('/clientes', function (req,res){
    res.render('index');
});

module.exports = router;