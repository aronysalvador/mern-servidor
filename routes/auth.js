//Rutas para autenticar usuario
const express =  require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');



//  Iniciar Sesion
//  api/auth
router.post('/',
    authController.autenticarUsuario
);

// Obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
)

module.exports = router;